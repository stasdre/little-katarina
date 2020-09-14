import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import moment from 'moment'
import {
    nextCalendar,
    prevCalendar,
    setCalendars,
    setBookingSuccess,
    setBookingRequest,
    setBookingFailure,
    unsetBookingSuccess,
    unsetBookingRequest,
    unsetBookingFailure,
    bookingSuccess,
    bookingRequest,
    bookingFailure,
} from './actions'

const calendars = handleActions(
    {
        [setCalendars]: (_state, action) => action.payload.calendars,
        [nextCalendar]: (_state, action) => action.payload.calendars,
        [prevCalendar]: (_state, action) => action.payload.calendars,
    },
    []
)

const lastCurrentMonth = handleActions(
    {
        [nextCalendar]: (_state, action) => action.payload.lastCurrentMonth,
        [prevCalendar]: (_state, action) => action.payload.lastCurrentMonth,
    },
    moment().format('M/YYYY')
)

const showCalendars = handleActions(
    {
        [setCalendars]: (_state, action) => action.payload.showCalendars,
    },
    1
)

const isPrev = handleActions(
    {
        [nextCalendar]: () => true,
        [prevCalendar]: (_state, action) => action.payload.isPrev,
    },
    false
)

const isNext = handleActions({}, true)

const bookedDays = handleActions(
    {
        [setBookingSuccess]: (_state, action) => [
            ..._state,
            moment(action.payload.date, 'YYYY-MM-DD').format('YYYY-MM-DD'),
        ],
        [unsetBookingSuccess]: (_state, action) => [
            ..._state.filter(item => item !== action.payload.date),
        ],
        [bookingSuccess]: (_state, action) => action.payload.dates,
    },
    []
)

const isLoading = handleActions(
    {
        [setBookingRequest]: () => true,
        [setBookingSuccess]: () => false,
        [setBookingFailure]: () => false,

        [unsetBookingRequest]: () => true,
        [unsetBookingSuccess]: () => false,
        [unsetBookingFailure]: () => false,

        [bookingRequest]: () => true,
        [bookingSuccess]: () => false,
        [bookingFailure]: () => false,
    },
    false
)

export default combineReducers({
    calendars,
    lastCurrentMonth,
    showCalendars,
    bookedDays,
    isPrev,
    isNext,
    isLoading,
})
