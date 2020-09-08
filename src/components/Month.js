import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import classNames from 'classnames'

const Month = ({ current, handelNext, handelPrev }) => {
    moment.locale('en-gb')
    const momentData = moment(current, 'M/YYYY')
    const startDay = momentData.clone().startOf('month').startOf('week')
    const endDay = momentData.clone().endOf('month').endOf('week')
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
                            {moment.weekdaysShort().map((item) => (
                                <td key={item}>{item}</td>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {calendar.map((week) => (
                            <tr key={week.toString()}>
                                {week.map((day) => (
                                    <td key={day.toString()}>
                                        <button
                                            className={classNames({
                                                calendar__link: true,
                                                //calendar__link_disable: true,
                                                // 'calendar__link_not-current': day.diff(
                                                //     startDay,
                                                //     'months',
                                                //     true
                                                // ),
                                            })}
                                        >
                                            {day.format('D').toString()}
                                        </button>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

Month.propTypes = {
    current: PropTypes.string.isRequired,
}

export default Month
