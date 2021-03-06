import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import moment from 'moment'
import {
    nextCalendar,
    prevCalendar,
    setCalendars,
    bookingRequest,
    bookingSuccess,
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
        [bookingSuccess]: (_state, action) => action.payload.dates,
    },
    []
)

const isLoading = handleActions(
    {
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
