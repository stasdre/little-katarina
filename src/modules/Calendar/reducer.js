import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import moment from 'moment'
import { nextCalendar, prevCalendar, setCalendars } from './actions'

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

const bookedDays = handleActions({}, [
    '2020-09-12',
    '2020-09-15',
    '2020-09-16',
    '2020-09-17',
    '2020-09-20',
    '2020-09-24',
    '2020-09-25',
    '2020-09-30',
    '2020-10-02',
    '2020-10-05',
    '2020-10-06',
    '2020-10-08',
    '2020-10-21',
    '2020-10-22',
])

export default combineReducers({
    calendars,
    lastCurrentMonth,
    showCalendars,
    bookedDays,
    isPrev,
    isNext,
})
