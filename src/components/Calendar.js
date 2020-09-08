import React from 'react'
import Month from './Month'
import moment from 'moment'

const momentFormat = 'M/YYYY'

class Calendar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            calendars: [],
            lastCurrentMonth: moment().format(momentFormat),
            showCalendars: 1,
            transitionState: false,
            isPrev: false,
            isNext: true,
        }
    }

    handelNext = () => {
        const { lastCurrentMonth, showCalendars, transitionState } = this.state

        const newMomentFormat = moment(lastCurrentMonth, momentFormat).add(
            showCalendars,
            'month'
        )

        this.setState(
            {
                lastCurrentMonth: newMomentFormat.format(momentFormat),
                isPrev: true,
                transitionState: !transitionState,
            },
            this.updateCalendars
        )
    }

    handelPrev = () => {
        const {
            isPrev,
            lastCurrentMonth,
            showCalendars,
            transitionState,
        } = this.state

        if (!isPrev) return

        const newMomentFormat = moment(lastCurrentMonth, momentFormat).subtract(
            showCalendars,
            'month'
        )
        this.setState((state) => {
            return {
                isPrev: !newMomentFormat.isSame(moment().startOf('month')),
                lastCurrentMonth: newMomentFormat.format(momentFormat),
                transitionState: !transitionState,
            }
        }, this.updateCalendars)
    }

    updateCalendars = () => {
        const { lastCurrentMonth } = this.state
        const momentInitial = moment(lastCurrentMonth, momentFormat)

        if (!this.isMobile()) {
            this.setState((state) => {
                return {
                    showCalendars: 2,
                    calendars: [
                        momentInitial,
                        momentInitial.clone().add(1, 'month'),
                    ],
                }
            })
        } else {
            this.setState({
                showCalendars: 1,
                calendars: [momentInitial],
            })
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
        const { calendars, transitionState } = this.state

        return (
            <div className="calendar">
                <button
                    className="calendar__control-big calendar__control-big_left"
                    onClick={this.handelPrev}
                >
                    Prev
                </button>
                {calendars.map((calendar, index) => (
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
        )
    }
}

export default Calendar
