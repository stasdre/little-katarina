import { createAction } from 'redux-actions'

export const setTime = createAction('TIME/SET_TIME')
export const clearTime = createAction('TIME/CLEAR_TIME')

export const bookTimeRequest = createAction('TIME/FEATCH_REQUEST')
export const bookTimeSuccess = createAction('TIME/FEATCH_SUCCESS')
export const bookTimeFailure = createAction('TIME/FEATCH_FAILURE')

export const setModalClosed = createAction('TIME/SET_MODAL_CLOSED')
export const setModalSuccessClosed = createAction(
    'TIME/SET_MODAL_SUCCESS_CLOSED'
)

export const setModalOpen = createAction('TIME/SET_MODAL_OPEN')
export const setModalSuccessOpen = createAction('TIME/SET_MODAL_SUCCESS_OPEN')
