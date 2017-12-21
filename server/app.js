const express    = require('express')
const bodyParser = require('body-parser')
// const axios = require('axios')
const cors       = require('cors')
const redis      = require('redis')
let client       = redis.createClient(6379)

const app = express()
const fetch = require('./routes/fetch')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/', fetch)

app.listen(process.env.PORT || 3000, (err)=>{
    if (err) console.log(err)
    console.log('PORT 3000 FOR SERVER DEV !')
})