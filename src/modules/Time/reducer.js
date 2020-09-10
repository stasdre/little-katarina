import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import { setTime, clearTime } from './actions'

const startBooking = handleActions(
    {
        [setTime]: (_state, action) => action.payload.startBooking,
        [clearTime]: () => '',
    },
    ''
)

const endBooking = handleActions(
    {
        [setTime]: (_state, action) => action.payload.endBooking,
        [clearTime]: () => '',
    },
    ''
)

export default combineReducers({
    startBooking,
    endBooking,
})
