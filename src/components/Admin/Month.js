import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import moment from 'moment'
import classNames from 'classnames'
import {
    getCalendarData,
    setBookingRequest,
    unsetBookingRequest,
} from './modules/Calendar'

class Month extends Component {
    constructor(props) {
        super(props)
    }

    bookingDate(date) {
        const { setBookingRequest } = this.props
        setBookingRequest(date)
    }

    unBookingDate(date) {
        const { unsetBookingRequest } = this.props
        unsetBookingRequest(date)
    }

    render() {
        const { current, handelNext, handelPrev, calendarData } = this.props
        const momentData = moment(current, 'M/YYYY')
        const startDay = momentData
            .clone()
            .startOf('month')
            .startOf('week')
        const endDay = momentData
            .clone()
            .endOf('month')
            .endOf('week')
        const day = startDay.clone().subtract(1, 'day')
        const calendar = []

        while (day.isBefore(endDay, 'day')) {
            calendar.push(
                Array(7)
                    .fill(0)
                    .map(() => day.add(1, 'day').clone())
            )
        }
        return (
            <div className="calendar__item">
                <div className="calendar__item-control">
                    <button
                        className="calendar__control-sm calendar__control-sm_left"
                        onClick={handelPrev}
                    >
                        Prev
                    </button>
                    <div className="calendar__current">
                        {momentData.format('MMMM YYYY')}
                    </div>
                    <button
                        className="calendar__control-sm calendar__control-sm_right"
                        onClick={handelNext}
                    >
                        Next
                    </button>
                </div>
                <div className="calendar__content">
                    <table>
                        <thead>
                            <tr>
                                {moment.weekdaysShort().map(item => (
                                    <td key={item}>{item}</td>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {calendar.map(week => {
                                return (
                                    <tr key={week.toString()}>
                                        {week.map(day => {
                                            const isDisable = day.isBefore(
                                                new Date(),
                                                'day'
                                            )
                                            const isBookedDay =
                                                calendarData.bookedDays.indexOf(
                                                    day.format('YYYY-MM-DD')
                                                ) < 0
                                                    ? false
                                                    : true
                                            return (
                                                <td key={day.toString()}>
                                                    <button
                                                        onClick={() =>
                                                            isBookedDay
                                                                ? this.unBookingDate(
                                                                      day.format(
                                                                          'YYYY-MM-DD'
                                                                      )
                                                                  )
                                                                : this.bookingDate(
                                                                      day.format(
                                                                          'YYYY-MM-DD'
                                                                      )
                                                                  )
                                                        }
                                                        className={classNames({
                                                            calendar__admin: true,
                                                            calendar__link: true,
                                                            calendar__link_disable: isDisable,
                                                            calendar__link_booked: isBookedDay,
                                                            'calendar__link_not-current':
                                                                day.isBefore(
                                                                    momentData,
                                                                    'month'
                                                                ) ||
                                                                day.isAfter(
                                                                    momentData,
                                                                    'month'
                                                                ),
                                                        })}
                                                    >
                                                        {day
                                                            .format('D')
                                                            .toString()}
                                                    </button>
                                                </td>
                                            )
                                        })}
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

Month.propTypes = {
    current: PropTypes.string.isRequired,
}

export default connect(state => ({ calendarData: getCalendarData(state) }), {
    setBookingRequest,
    unsetBookingRequest,
})(Month)
