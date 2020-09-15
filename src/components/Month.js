import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import moment from 'moment'
import classNames from 'classnames'
import { useParams, useHistory } from 'react-router-dom'
import { getCalendarData } from '../modules/Calendar'
import Modal from './Modal'

const Month = ({ current, handelNext, handelPrev, calendarData }) => {
    const [dateLink, setDateLink] = useState(null)
    const [modalClosed, setModalClosed] = useState(true)
    const history = useHistory()
    const lang = useParams('lang').lang || 'en'
    moment.locale(lang)
    const momentData = moment(current, 'M/YYYY')
    const startDay = momentData
        .clone()
        .locale(lang)
        .startOf('month')
        .startOf('week')
    const endDay = momentData
        .clone()
        .locale(lang)
        .endOf('month')
        .endOf('week')
    const day = startDay
        .clone()
        .locale(lang)
        .subtract(1, 'day')
    const calendar = []

    while (day.isBefore(endDay, 'day')) {
        calendar.push(
            Array(7)
                .fill(0)
                .map(() => day.add(1, 'day').clone())
        )
    }

    const book = day => {
        setDateLink(`/${lang}/booking/${day}`)
        setModalClosed(false)
    }

    const bookHandler = () => {
        setModalClosed(true)
        history.push(dateLink)
    }

    const closeModal = () => {
        setModalClosed(true)
    }

    return (
        <>
            <Modal
                isClosed={modalClosed}
                title="Booking Conditions:"
                btnHandler={bookHandler}
                closeBtnHandler={closeModal}
            >
                <ul>
                    <li>Minimum reservation time = 4 hours.</li>
                    <li>
                        You just need to make 25% prepayment in this Calendar
                        and our manager will inform you about details of your
                        «heaven time» with our angels.
                    </li>
                    <li>
                        Please feel free to ask any additional questions via{' '}
                        <a
                            className="modal__link"
                            href="mailto:thelittlekatarina@gmail.com"
                        >
                            Email
                        </a>
                    </li>
                </ul>
            </Modal>
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
                                {moment.weekdaysShort(true).map(item => (
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
                                                    <button
                                                        to={
                                                            isDisable ||
                                                            isBookedDay
                                                                ? '#'
                                                                : `/${lang}/booking/${day
                                                                      .locale(
                                                                          'en'
                                                                      )
                                                                      .format(
                                                                          'YYYY/M/D'
                                                                      )}`
                                                        }
                                                        onClick={() =>
                                                            isDisable ||
                                                            isBookedDay
                                                                ? null
                                                                : book(
                                                                      day
                                                                          .locale(
                                                                              'en'
                                                                          )
                                                                          .format(
                                                                              'YYYY/M/D'
                                                                          )
                                                                  )
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
        </>
    )
}

Month.propTypes = {
    current: PropTypes.string.isRequired,
}

export default connect(
    state => ({ calendarData: getCalendarData(state) }),
    {}
)(Month)
