import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import { connect } from 'react-redux';
import PropType from 'prop-types';
import 'react-day-picker/lib/style.css';
import { changeDateRange } from '../../AC';

class DatePicker extends React.Component {
  static propTypes = {
    changeDateRange: PropType.func,
    range: PropType.shape({
      from: PropType.date,
      to: PropType.date,
    }),
  };
  handleDayClick = (day) => {
    const { changeDateRange, range } = this.props;
    changeDateRange(DateUtils.addDayToRange(day, range));
  };
  render() {
    const { from, to } = this.props.range;
    return (
      <div>
        <p>
          {!from && !to && 'Please select the first day.'}
          {from && !to && 'Please select the last day.'}
          {from &&
            to &&
            `Selected from ${from.toLocaleDateString()} to
                           ${to.toLocaleDateString()}`}
        </p>
        <DayPicker
          selectedDays={{ from, to }}
          onDayClick={this.handleDayClick}
        />
      </div>
    );
  }
}

export default connect(state => ({
  range: state.filters.dateRange,
}), { changeDateRange })(DatePicker);
