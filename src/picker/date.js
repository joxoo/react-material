import React, { PropTypes } from 'react';
import DialogAlert from '../dialog/alert';
import IconButton from '../buttons/icon-button';
import moment from 'moment';

const getCalendarDays = ({ startWeekDay,  monthDaysCount }) => {
    const isMonthDay = true;
    const arraySize = startWeekDay + monthDaysCount;
    const maxSize = arraySize + (7 - (arraySize % 7));
    const days = Array(maxSize).fill(!isMonthDay, 0, startWeekDay);

    days.fill(isMonthDay, startWeekDay, arraySize);

    if (arraySize % 7) {
        days.fill(!isMonthDay, arraySize, maxSize);
    }

    return days;
};

const createDefaultState = (props) => {
    const today = new Date();
    const date = props.date || today;
    const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const endDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 0);

    return {
        selectedDate: moment(date),
        selectedMonth: {
            date: moment(date).set('date', 15),
            startWeekDay: startOfMonth.getDay(),
            monthDaysCount: endDayOfMonth.getDate()
        },
        today: {
            date: moment(today)
        }
    };
};

class PickerDate extends React.PureComponent {
    static propTypes = {
        date: PropTypes.instanceOf(Date),
        agree: PropTypes.shape({
            label: PropTypes.string.isRequired,
            onClick: PropTypes.func.isRequired
        }).isRequired,
        disagree: PropTypes.shape({
            label: PropTypes.string.isRequired,
            onClick: PropTypes.func.isRequired
        })
    };

    constructor(props, context) {
        super(props, context);

        this.state = createDefaultState(props);
        this.handlePrevMonth = this.handlePrevMonth.bind(this);
        this.handleNextMonth = this.handleNextMonth.bind(this);
        this.onAgree = this.onAgree.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    updateSelected(date) {
        const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
        const endDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 0);

        this.setState({
            selectedMonth: {
                date: moment(date),
                startWeekDay: startOfMonth.getDay(),
                monthDaysCount: endDayOfMonth.getDate()
            }
        });
    }

    handleSelect(event) {
        const date = event.target.getAttribute('data-key');
        const { selectedMonth } = this.state;

        this.setState({
            selectedDate: moment(selectedMonth.date.toDate()).set('date', date)
        });
    }

    handlePrevMonth() {
        const { selectedMonth } = this.state;

        this.updateSelected(selectedMonth.date.subtract(1, 'months').toDate());
    }

    handleNextMonth() {
        const { selectedMonth } = this.state;

        this.updateSelected(selectedMonth.date.add(1, 'months').toDate());
    }

    onAgree() {
        this.props.agree.onClick(this.state.selectedDate.toDate());
    }

    render() {
        const { disagree } = this.props;
        const { selectedMonth, selectedDate } = this.state;
        const agree = { onClick: this.onAgree, label: this.props.agree.label };
        const isSelectedDateInMonth = selectedDate.get('month') === selectedMonth.date.get('month');
        const selectedMonthDate = selectedDate.get('date');
        const days = getCalendarDays(selectedMonth);
        let day = 1;

        return (
            <DialogAlert agree={ agree } disagree={ disagree } className='picker-date'>
                <div className='picker-date-header'>
                    <span className='header-subtitle'> { selectedDate.format('YYYY') } </span>
                    <h3 className='header-title'>{ selectedDate.format('ddd, MMM, DD') }</h3>
                </div>
                <div className='picker-date-body'>
                    <div className='picker-date-navigation'>
                        <IconButton icon='0xE314' className='picker-date-prev' onClick={ this.handlePrevMonth } />
                        <span className='picker-date-month'>{ selectedMonth.date.format('MMMM YYYY') }</span>
                        <IconButton icon='0xE315' className='picker-date-next' onClick={ this.handleNextMonth } />
                    </div>
                    <div className='picker-date-weekdays'>
                        { moment.weekdaysShort().map((wd, key) => <span key={ key }>{ wd }</span>) }
                    </div>
                    <div className='picker-date-days' onClick={ this.handleSelect }>
                        { days.map((isDay, key) => {
                            const className = isSelectedDateInMonth && selectedMonthDate === day ?
                                'picker-date-day-selected': 'picker-date-day';
                            return (
                                <span className={ className } data-key={ day } key={ key }>{ isDay ? day++ : '' }</span>
                            );
                        }) }
                    </div>
                </div>
            </DialogAlert>
        );
    }
}

export default PickerDate;
