import { createAction } from 'redux-actions'

export const nextCalendar = createAction('CALENDAR/NEXT')
export const prevCalendar = createAction('CALENDAR/PREV')
export const setCalendars = createAction('CALENDAR/SET_CALENDARS')

export const bookingRequest = createAction('CALENDAR/FEATCH_REQUEST')
export const bookingSuccess = createAction('CALENDAR/FEATCH_SUCCESS')
export const bookingFailure = createAction('CALENDAR/FEATCH_FAILURE')
