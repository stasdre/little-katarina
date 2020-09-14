import React from 'react'
import { connect } from 'react-redux'

import {
    nextCalendar,
    prevCalendar,
    setCalendars,
    getCalendarData,
    bookingRequest,
} from './modules/Calendar'
import Month from './Month'
import moment from 'moment'
import classNames from 'classnames'

const momentFormat = 'M/YYYY'

class Calendar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lastCurrentMonth: null,
        }
    }

    handelNext = () => {
        const { calendarData, nextCalendar } = this.props

        const newMomentFormat = moment(
            calendarData.lastCurrentMonth,
            momentFormat
        ).add(calendarData.showCalendars, 'month')

        if (!this.isMobile()) {
            nextCalendar({
                lastCurrentMonth: newMomentFormat.format(momentFormat),
                calendars: [
                    newMomentFormat,
                    newMomentFormat.clone().add(1, 'month'),
                ],
            })
        } else {
            nextCalendar({
                lastCurrentMonth: newMomentFormat.format(momentFormat),
                calendars: [newMomentFormat],
            })
        }
    }

    handelPrev = () => {
        const { calendarData, prevCalendar } = this.props

        if (!calendarData.isPrev) return

        const newMomentFormat = moment(
            calendarData.lastCurrentMonth,
            momentFormat
        ).subtract(calendarData.showCalendars, 'month')

        if (!this.isMobile()) {
            prevCalendar({
                lastCurrentMonth: newMomentFormat.format(momentFormat),
                calendars: [
                    newMomentFormat,
                    newMomentFormat.clone().add(1, 'month'),
                ],
                isPrev: !newMomentFormat.isSame(moment().startOf('month')),
            })
        } else {
            prevCalendar({
                lastCurrentMonth: newMomentFormat.format(momentFormat),
                calendars: [newMomentFormat],
                isPrev: !newMomentFormat.isSame(moment().startOf('month')),
            })
        }
    }

    updateCalendars = () => {
        const { setCalendars, calendarData } = this.props

        const momentInitial = moment(
            calendarData.lastCurrentMonth,
            momentFormat
        )

        if (!this.isMobile()) {
            setCalendars({
                calendars: [
                    momentInitial,
                    momentInitial.clone().add(1, 'month'),
                ],
                showCalendars: 2,
            })
        } else {
            setCalendars({ calendars: [momentInitial], showCalendars: 1 })
        }
    }

    isMobile = () => window.innerWidth <= 991

    componentDidMount() {
        window.addEventListener('resize', this.updateCalendars)
        this.updateCalendars()
    }

    componentDidUpdate() {
        const { bookingRequest, calendarData } = this.props
        const { lastCurrentMonth } = this.state

        if (lastCurrentMonth !== calendarData.lastCurrentMonth) {
            this.setState({ lastCurrentMonth: calendarData.lastCurrentMonth })
            bookingRequest({
                from: moment(calendarData.lastCurrentMonth, momentFormat)
                    .subtract(1, 'month')
                    .format('YYYY-MM-DD'),
                to: moment(calendarData.lastCurrentMonth, momentFormat)
                    .add(2, 'month')
                    .format('YYYY-MM-DD'),
            })
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateCalendars)
    }

    render() {
        const { calendarData } = this.props

        return (
            <>
                <div
                    className={classNames({
                        calendar: true,
                        loading: calendarData.isLoading,
                    })}
                >
                    <button
                        className="calendar__control-big calendar__control-big_left"
                        onClick={this.handelPrev}
                        style={{ marginRight: '10px' }}
                    >
                        Prev
                    </button>
                    {calendarData.calendars.map((calendar, index) => (
                        <Month
                            key={calendar.toString()}
                            current={calendar.format('M/YYYY')}
                            handelNext={this.handelNext}
                            handelPrev={this.handelPrev}
                        />
                    ))}
                    <button
                        className="calendar__control-big calendar__control-big_right"
                        onClick={this.handelNext}
                        style={{ marginLeft: '-40px' }}
                    >
                        Next
                    </button>
                </div>
            </>
        )
    }
}

export default connect(state => ({ calendarData: getCalendarData(state) }), {
    setCalendars,
    nextCalendar,
    prevCalendar,
    bookingRequest,
})(Calendar)
