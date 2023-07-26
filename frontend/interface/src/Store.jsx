import {combineReducers,applyMiddleware} from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import {shambaListReducer} from './reducers/ShambaReducer'

const reducer = combineReducers({
    shambaList:shambaListReducer,
})

const middlware = [thunk]

const store = configureStore({reducer}, composeWithDevTools(applyMiddleware(...middlware)))

export default store