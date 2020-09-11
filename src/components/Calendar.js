import React from 'react'
import { connect } from 'react-redux'

import {
    nextCalendar,
    prevCalendar,
    setCalendars,
    getCalendarData,
} from '../modules/Calendar'
import Month from './Month'
import moment from 'moment'

const momentFormat = 'M/YYYY'

class Calendar extends React.Component {
    constructor(props) {
        super(props)
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

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateCalendars)
    }

    render() {
        const { calendarData } = this.props

        return (
            <>
                <h2 className="booking__title">
                    Book <span>4 hours minimum session:</span>
                </h2>
                <div className="calendar">
                    <button
                        className="calendar__control-big calendar__control-big_left"
                        onClick={this.handelPrev}
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
})(Calendar)
