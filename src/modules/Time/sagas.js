import { takeLatest, put, call, fork } from 'redux-saga/effects'
import { bookTime } from '../../components/helpers/api'
import { bookTimeRequest, bookTimeSuccess, bookTimeFailure } from './actions.js'

function* timeWatcher() {
    yield takeLatest(bookTimeRequest, timeFlow)
}

export function* timeFlow(action) {
    const data = action.payload
    const payload = yield call(bookTime, data)

    if (payload.staus === 'ok') {
        yield put(bookTimeSuccess())
    } else {
        yield put(bookTimeFailure())
    }
}

export default function*() {
    yield fork(timeWatcher)
}
