import axios from 'axios'

var http = axios.create({
    baseURL: 'http://35.197.157.222:4200'
})

export const fetchData = (params) =>{
    return (dispatch) => {
        http.get('/tractive-test')
        .then(result => {
            dispatch(
                throwData(result.data)        
            )
        })
    }
}

export const throwData = (params) =>{
    return {
        type: 'FETCH_DATA',
        payload: params
    }
}