import { combineReducers } from 'redux'
import { fork } from 'redux-saga/effects'
import calendar, { sagas as bookingSaga } from './Calendar'

export default combineReducers({ calendar })

export function* rootSaga() {
    yield fork(bookingSaga)
}
