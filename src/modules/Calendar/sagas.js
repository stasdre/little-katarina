import { takeLatest, put, call, fork } from 'redux-saga/effects'
import { getDates } from '../../components/helpers/api'
import { bookingRequest, bookingSuccess, bookingFailure } from './actions.js'

function* bookingWatcher() {
    yield takeLatest(bookingRequest, bookingFlow)
}

export function* bookingFlow(action) {
    const { from, to } = action.payload
    const payload = yield call(getDates, from, to)

    if (payload) {
        yield put(bookingSuccess(payload))
    } else {
        yield put(bookingFailure())
    }
}

export default function*() {
    yield fork(bookingWatcher)
}
