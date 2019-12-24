import React, { PureComponent } from 'react';
import DatePickerComponent from 'react-datepicker';
import moment from 'moment';

class DatePicker extends PureComponent {
  state = {
    startDate: moment(),
  };

  handleChange = date => this.setState({ startDate: date });

  render() {
    return (
      <div>
        <DatePickerComponent
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default DatePicker;
