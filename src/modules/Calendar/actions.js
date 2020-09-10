import { createAction } from 'redux-actions'

export const nextCalendar = createAction('CALENDAR/NEXT')
export const prevCalendar = createAction('CALENDAR/PREV')
export const setCalendars = createAction('CALENDAR/SET_CALENDARS')
