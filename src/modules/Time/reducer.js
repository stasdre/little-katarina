import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import {
    setTime,
    clearTime,
    bookTimeRequest,
    bookTimeSuccess,
    bookTimeFailure,
    setModalOpen,
    setModalClosed,
    setModalSuccessClosed,
} from './actions'

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

const isLoading = handleActions(
    {
        [bookTimeRequest]: () => true,
        [bookTimeSuccess]: () => false,
        [bookTimeFailure]: () => true,
    },
    false
)

const modalClosed = handleActions(
    {
        [setModalOpen]: () => false,
        [bookTimeSuccess]: () => true,
        [setModalClosed]: () => true,
    },
    true
)
const modalSuccesClosed = handleActions(
    {
        [bookTimeSuccess]: () => false,
        [setModalSuccessClosed]: () => true,
    },
    true
)

export default combineReducers({
    startBooking,
    endBooking,
    isLoading,
    modalClosed,
    modalSuccesClosed,
})
