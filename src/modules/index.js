import { combineReducers } from 'redux'
import calendar from './Calendar'
import time from './Time'

export default combineReducers({ calendar, time })
