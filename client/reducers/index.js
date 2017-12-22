const fetchState = {
    allData: [],
    source: null
}

const tractiveTestReducer = (state = fetchState, actions) =>{
    switch(actions.type) {
        case 'FETCH_DATA':
            return {...state, allData: actions.payload.result, source:actions.payload.source}
        default:
            return state
    }
}

export default tractiveTestReducer
