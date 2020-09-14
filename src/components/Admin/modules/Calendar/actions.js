import { createAction } from 'redux-actions'

export const nextCalendar = createAction('CALENDAR/NEXT')
export const prevCalendar = createAction('CALENDAR/PREV')
export const setCalendars = createAction('CALENDAR/SET_CALENDARS')

export const bookingRequest = createAction('CALENDAR/FEATCH_REQUEST')
export const bookingSuccess = createAction('CALENDAR/FEATCH_SUCCESS')
export const bookingFailure = createAction('CALENDAR/FEATCH_FAILURE')

export const setBookingRequest = createAction('CALENDAR/SET_BOOKING_REQUEST')
export const setBookingSuccess = createAction('CALENDAR/SET_BOOKING_SUCCESS')
export const setBookingFailure = createAction('CALENDAR/SET_BOOKING_FAILURE')

export const unsetBookingRequest = createAction(
    'CALENDAR/UNSET_BOOKING_REQUEST'
)
export const unsetBookingSuccess = createAction(
    'CALENDAR/UNSET_BOOKING_SUCCESS'
)
export const unsetBookingFailure = createAction(
    'CALENDAR/UNSET_BOOKING_FAILURE'
)
