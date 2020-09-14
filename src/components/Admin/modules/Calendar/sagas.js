import { takeLatest, put, call, fork } from 'redux-saga/effects'
import { getDates, setDate, unsetDate } from '../../helpers/api'
import {
    bookingRequest,
    bookingSuccess,
    bookingFailure,
    setBookingRequest,
    setBookingSuccess,
    setBookingFailure,
    unsetBookingRequest,
    unsetBookingSuccess,
    unsetBookingFailure,
} from './actions.js'

function* bookingWatcher() {
    yield takeLatest(bookingRequest, bookingFlow)
    yield takeLatest(setBookingRequest, setBookingFlow)
    yield takeLatest(unsetBookingRequest, unsetBookingFlow)
}

export function* bookingFlow(action) {
    const { from, to } = action.payload
    const payload = yield call(getDates, from, to)
    //console.log(payload)
    if (payload) {
        yield put(bookingSuccess(payload))
    } else {
        yield put(bookingFailure())
    }
}

export function* setBookingFlow(action) {
    const date = action.payload
    const payload = yield call(setDate, date)
    if (payload.status === 'ok') {
        yield put(setBookingSuccess(payload))
    } else {
        yield put(setBookingFailure())
    }
}

export function* unsetBookingFlow(action) {
    const date = action.payload
    const payload = yield call(unsetDate, date)
    if (payload.status === 'ok') {
        yield put(unsetBookingSuccess(payload))
    } else {
        yield put(unsetBookingFailure())
    }
}

export default function*() {
    yield fork(bookingWatcher)
}
