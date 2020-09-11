import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import moment from 'moment'
import classNames from 'classnames'
import { Link, useParams } from 'react-router-dom'
import { getCalendarData } from '../modules/Calendar'

const Month = ({ current, handelNext, handelPrev, calendarData }) => {
    const lang = useParams('lang').lang || 'en'
    moment.locale(lang)
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
                                        const isDisable = day
                                            .locale('en')
                                            .isBefore(new Date(), 'day')
                                        const isBookedDay =
                                            calendarData.bookedDays.indexOf(
                                                day
                                                    .locale('en')
                                                    .format('YYYY-MM-DD')
                                            ) < 0
                                                ? false
                                                : true
                                        return (
                                            <td key={day.toString()}>
                                                <Link
                                                    to={
                                                        isDisable || isBookedDay
                                                            ? '#'
                                                            : `/${lang}/booking/${day
                                                                  .locale('en')
                                                                  .format(
                                                                      'YYYY/M/D'
                                                                  )}`
                                                    }
                                                    className={classNames({
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
                                                        .locale(lang)
                                                        .format('D')
                                                        .toString()}
                                                </Link>
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

Month.propTypes = {
    current: PropTypes.string.isRequired,
}

export default connect(
    state => ({ calendarData: getCalendarData(state) }),
    {}
)(Month)
