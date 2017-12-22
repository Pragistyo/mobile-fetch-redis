import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/index'
import thunk from 'redux-thunk'

// alert(rootReducer)
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export default store