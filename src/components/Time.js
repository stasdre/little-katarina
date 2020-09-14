import React, { useState } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'
import { setTime, clearTime, getTimeData } from '../modules/Time'
import Modal from './Modal'

const Time = ({ setTime, timeData, clearTime }) => {
    const [modalClosed, setModalClosed] = useState(true)
    const [modalSuccesClosed, setModalSuccessClosed] = useState(true)

    const history = useHistory()

    const { year, month, day, lang } = useParams()
    const selectedData = moment(`${day}/${month}/${year}`, 'D/M/YYYY')
    const prevDate = selectedData.clone().subtract(1, 'day')
    const prevDateLink = prevDate.isBefore(new Date(), 'day')
        ? `#`
        : `/${lang}/booking/${prevDate.locale('en').format('YYYY/M/D')}`
    const nextDateLink = `/${lang}/booking/${selectedData
        .clone()
        .locale('en')
        .add(1, 'day')
        .format('YYYY/M/D')}`

    const times = []
    const dateTime = selectedData.clone().locale(lang)
    for (let i = 0; i < 24; i++) {
        times.push({ label: dateTime.hours(i).format('H:mm'), value: i })
    }

    const handleTimeSelect = event => {
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
            startBooking: startTime.locale('en').format('YYYY-M-D H:mm'),
            endBooking: endTime.locale('en').format('YYYY-M-D H:mm'),
        })
    }

    const book = () => {
        setModalClosed(false)
    }

    const closeModal = () => {
        setModalClosed(true)
    }

    const bookHandler = () => {
        setModalClosed(true)
        setModalSuccessClosed(false)
    }

    const closeModalSuccess = () => {
        setModalSuccessClosed(true)
        history.push(`/${lang}/booking`)
    }
    return (
        <>
            <Modal
                title=""
                isClosed={modalSuccesClosed}
                btnHandler={() => null}
                closeBtnHandler={closeModalSuccess}
                hideBtn={true}
                hideTitle={true}
            >
                <h3 className="modal__success-title">successfully booked</h3>
                <div className="modal__success" />
            </Modal>
            <Modal
                title="Book a time:"
                isClosed={modalClosed}
                closeBtnHandler={closeModal}
                btnHandler={bookHandler}
            >
                <p className="modal__date">
                    Date:
                    <span>
                        {timeData.startBooking
                            ? moment(timeData.startBooking, 'YYYY-M-D H:mm')
                                  .locale(lang)
                                  .format(' MMMM D')
                            : ''}
                    </span>
                </p>
                <p className="modal__time">
                    Time:
                    <span>
                        {timeData.startBooking
                            ? moment(timeData.startBooking, 'YYYY-M-D H:mm')
                                  .locale(lang)
                                  .format(' H:mm ')
                            : ''}
                        -
                        {timeData.endBooking
                            ? moment(timeData.endBooking, 'YYYY-M-D H:mm')
                                  .locale(lang)
                                  .format(' H:mm')
                            : ''}
                    </span>
                </p>
                <h4 className="modal__subtitle">Personal data:</h4>
                <form className="form modal__form" action="#" method="post">
                    <div className="form__row">
                        <div className="form__col">
                            <input
                                className="form__input"
                                type="text"
                                placeholder="Name"
                            />
                        </div>
                    </div>
                    <div className="form__row">
                        <div className="form__col">
                            <input
                                className="form__input"
                                type="text"
                                placeholder="Phone"
                            />
                        </div>
                    </div>
                    <div className="form__row">
                        <div className="form__col">
                            <input
                                className="form__input"
                                type="email"
                                placeholder="Email"
                            />
                        </div>
                    </div>
                    <div className="form__row"></div>
                </form>
            </Modal>
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
                <div className="time__day">
                    {selectedData.locale(lang).format('MMMM D')}
                </div>
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
                    {times.map(time => (
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
                        {times.slice(0, 6).map(time => (
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
                        {times.slice(6, 12).map(time => (
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
                        {times.slice(12, 18).map(time => (
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
                        {times.slice(18, 24).map(time => (
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
                    to={`/${lang}/booking`}
                    className="time__nav-link time__nav-link_back"
                >
                    Back
                </Link>
                {modalClosed && timeData.startBooking ? (
                    <button
                        onClick={book}
                        className="time__nav-link time__nav-link_next"
                    >
                        Next
                    </button>
                ) : null}
            </div>
        </>
    )
}

export default connect(state => ({ timeData: getTimeData(state) }), {
    setTime,
    clearTime,
})(Time)
