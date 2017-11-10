import {createStore, applyMiddleware} from 'redux'
import reducer from 'reducers'

const store = createStore(reducer)

//dev only
window.store = store

export default store