const axios  = require('axios')
const redis  = require('redis')
const client = redis.createClient(6379)

client.on('error', function (err) {
    console.log('Error ' + err);
});

client.on('connect', (err)=>{
    if(err) console.log(err)
    console.log('redis connected')
});

const http = axios.create({
    baseURL: 'http://35.197.157.222',
    timeout: 1000,
})


class TracktiveTest {
    constructor() {

    }

    static fetchAll (req,res) {
        var dataFetched = null
        try {
            client.get('fetchData', async (err,reply) => {
               if (err)  console.log(err)
               if (reply) {
                dataFetched = JSON.parse(reply)
                // you can defined when redis will be expired
                client.expire('fetchData', 10) // redis expired in 10 sec,
                console.log('from redis')
                dataFetched.source = 'REDIS CACHE'
                res.send(dataFetched)
               } else {
                   const result = await http.get('/listUser')
                   client.set('fetchData', JSON.stringify(result.data))
                   console.log('from endpoint')
                   result.data.source = 'FETCH ENDPOINT'
                   res.send(result.data)
               }
            })
        } catch (err) {
            res.send(err)
        }
    }

}

module.exports= TracktiveTest