import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'
import { setTime, clearTime, getTimeData } from '../modules/Time'

const Time = ({ setTime, timeData, clearTime }) => {
    const { year, month, day } = useParams()
    const selectedData = moment(`${day}/${month}/${year}`, 'D/M/YYYY')
    const prevDate = selectedData.clone().subtract(1, 'day')
    const prevDateLink = prevDate.isBefore(new Date(), 'day')
        ? `#`
        : `/little-katarina/book/${prevDate.format('YYYY/M/D')}`
    const nextDateLink = `/little-katarina/book/${selectedData
        .clone()
        .add(1, 'day')
        .format('YYYY/M/D')}`

    const times = [
        { label: '0:00', value: '0' },
        { label: '1:00', value: '1' },
        { label: '2:00', value: '2' },
        { label: '3:00', value: '3' },
        { label: '4:00', value: '4' },
        { label: '5:00', value: '5' },
        { label: '6:00', value: '6' },
        { label: '7:00', value: '7' },
        { label: '8:00', value: '8' },
        { label: '9:00', value: '9' },
        { label: '10:00', value: '10' },
        { label: '11:00', value: '11' },
        { label: '12:00', value: '12' },
        { label: '13:00', value: '13' },
        { label: '14:00', value: '14' },
        { label: '15:00', value: '15' },
        { label: '16:00', value: '16' },
        { label: '17:00', value: '17' },
        { label: '18:00', value: '18' },
        { label: '19:00', value: '19' },
        { label: '20:00', value: '20' },
        { label: '21:00', value: '21' },
        { label: '22:00', value: '22' },
        { label: '23:00', value: '23' },
    ]

    const handleTimeSelect = (event) => {
        const value = event.target.value
        if (!value) {
            setTime({
                startBooking: '',
                endBooking: '',
            })
            return
        }
        const startTime = selectedData.clone().hour(value * 1)
        const endTime = startTime.clone().add(4, 'hours')
        setTime({
            startBooking: startTime.format('YYYY-M-D H:mm'),
            endBooking: endTime.format('YYYY-M-D H:mm'),
        })
    }

    return (
        <>
            <h2 className="time__title">Book a time:</h2>
            <p className="time__subtitle time__subtitle_sm">
                Choose a time period.
            </p>
            <div className="time__control time__control_sm">
                <Link
                    to={prevDateLink}
                    className="time__arrow time__arrow_left"
                >
                    Prev
                </Link>
                <div className="time__day">{selectedData.format('MMMM D')}</div>
                <Link
                    to={nextDateLink}
                    className="time__arrow time__arrow_right"
                >
                    Next
                </Link>
            </div>
            <div className="time__select-wrapper time__select-wrapper_sm">
                <div className="time__from-label">From</div>
                <div className="time__value">
                    {timeData.startBooking &&
                    moment(timeData.startBooking, 'YYYY-M-D H:mm').isSame(
                        selectedData,
                        'day'
                    )
                        ? moment(timeData.startBooking, 'YYYY-M-D H:mm').format(
                              'H:mm'
                          )
                        : ''}
                </div>
                <select onChange={handleTimeSelect} className="time__select">
                    <option value=""></option>
                    {times.map((time) => (
                        <option key={time.value} value={time.value}>
                            {time.label}
                        </option>
                    ))}
                </select>
                <button className="time__cancel" onClick={clearTime}>
                    cancel
                </button>
            </div>
            <div className="time__to time__to_sm">
                {timeData.endBooking &&
                moment(timeData.startBooking, 'YYYY-M-D H:mm').isSame(
                    selectedData,
                    'day'
                )
                    ? moment(timeData.endBooking, 'YYYY-M-D H:mm').format(
                          'H:mm'
                      )
                    : ''}
            </div>
            <div className="time__select-check">
                <h3 className="time__pick">Pick a time interval</h3>
                <div className="time__top-controls">
                    <p className="time__text">
                        If you want to book several hours, just select them at
                        once
                    </p>
                    <div className="time__control">
                        <Link
                            to={prevDateLink}
                            className="time__arrow time__arrow_left"
                        >
                            Prev
                        </Link>
                        <div className="time__day">
                            {selectedData.format('MMMM D')}
                        </div>
                        <Link
                            to={nextDateLink}
                            className="time__arrow time__arrow_right"
                        >
                            Next
                        </Link>
                    </div>
                </div>
                <div className="time__check-wrapper">
                    <div className="time__col">
                        <div className="time__head">Morning</div>
                        {times.slice(0, 6).map((time) => (
                            <label className="time__label" key={time.value}>
                                {time.label}
                                <input
                                    onChange={handleTimeSelect}
                                    value={time.value}
                                    type="checkbox"
                                    checked={selectedData
                                        .clone()
                                        .hour(time.value * 1)
                                        .isBetween(
                                            moment(
                                                timeData.startBooking,
                                                'YYYY-M-D H:mm'
                                            ),
                                            moment(
                                                timeData.endBooking,
                                                'YYYY-M-D H:mm'
                                            ),
                                            'hour',
                                            '[)'
                                        )}
                                />
                                <div className="item__checkmark" />
                            </label>
                        ))}
                    </div>
                    <div className="time__col">
                        <div className="time__head">Afternoon</div>
                        {times.slice(6, 12).map((time) => (
                            <label className="time__label" key={time.value}>
                                {time.label}
                                <input
                                    onChange={handleTimeSelect}
                                    value={time.value}
                                    type="checkbox"
                                    checked={selectedData
                                        .clone()
                                        .hour(time.value * 1)
                                        .isBetween(
                                            moment(
                                                timeData.startBooking,
                                                'YYYY-M-D H:mm'
                                            ),
                                            moment(
                                                timeData.endBooking,
                                                'YYYY-M-D H:mm'
                                            ),
                                            'hour',
                                            '[)'
                                        )}
                                />
                                <div className="item__checkmark" />
                            </label>
                        ))}
                    </div>
                    <div className="time__col">
                        <div className="time__head">Evening</div>
                        {times.slice(12, 18).map((time) => (
                            <label className="time__label" key={time.value}>
                                {time.label}
                                <input
                                    onChange={handleTimeSelect}
                                    value={time.value}
                                    type="checkbox"
                                    checked={selectedData
                                        .clone()
                                        .hour(time.value * 1)
                                        .isBetween(
                                            moment(
                                                timeData.startBooking,
                                                'YYYY-M-D H:mm'
                                            ),
                                            moment(
                                                timeData.endBooking,
                                                'YYYY-M-D H:mm'
                                            ),
                                            'hour',
                                            '[)'
                                        )}
                                />
                                <div className="item__checkmark" />
                            </label>
                        ))}
                    </div>
                    <div className="time__col">
                        <div className="time__head">Night</div>
                        {times.slice(18, 24).map((time) => (
                            <label className="time__label" key={time.value}>
                                {time.label}
                                <input
                                    onChange={handleTimeSelect}
                                    value={time.value}
                                    type="checkbox"
                                    checked={selectedData
                                        .clone()
                                        .hour(time.value * 1)
                                        .isBetween(
                                            moment(
                                                timeData.startBooking,
                                                'YYYY-M-D H:mm'
                                            ),
                                            moment(
                                                timeData.endBooking,
                                                'YYYY-M-D H:mm'
                                            ),
                                            'hour',
                                            '[)'
                                        )}
                                />
                                <div className="item__checkmark" />
                            </label>
                        ))}
                    </div>
                </div>
            </div>
            <div className="time__nav">
                <Link
                    to="/little-katarina/book.html"
                    className="time__nav-link time__nav-link_back"
                >
                    Back
                </Link>
                <a href="#" className="time__nav-link time__nav-link_next">
                    Next
                </a>
            </div>
        </>
    )
}

export default connect((state) => ({ timeData: getTimeData(state) }), {
    setTime,
    clearTime,
})(Time)
