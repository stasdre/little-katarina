import { combineReducers } from 'redux'
import { fork } from 'redux-saga/effects'
import calendar, { sagas as bookingSaga } from './Calendar'
import time from './Time'

export default combineReducers({ calendar, time })

export function* rootSaga() {
    yield fork(bookingSaga)
}
