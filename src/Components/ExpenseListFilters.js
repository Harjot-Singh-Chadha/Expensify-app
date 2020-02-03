import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from "../actions/filters";

export class ExpenseListFilters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      calendarFocused: null,
      startDate: null,
      endDate: null
    };
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.setState({
      startDate,
      endDate
    });
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = calendarFocused => {
    this.setState({ calendarFocused });
  };

  onTextChange = e => {
    this.props.setTextFilter({ text: e.target.value });
  };

  onSortChange = e => {
    if (e.target.value === "date") {
      this.props.sortByDate();
    } else if (e.target.value === "amount") {
      this.props.sortByAmount();
    }
  };

  render() {
    return (
      <div className="content-container ">
        <div className="input-group">
          <div className="input-group__item">
            <input
              className="text-input"
              placeholder="Search Expenses"
              type="text"
              value={this.props.filters.text}
              onChange={this.onTextChange}
            />
          </div>
          <div className="input-group__item">
            <select
              className="select"
              value={this.props.filters.sortBy}
              onChange={this.onSortChange}
            >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div className="input-group__item">
            {this.props.filters.sortBy === "date" && (
              <DateRangePicker
                startDate={
                  this.state.startDate === null
                    ? this.state.startDate
                    : this.props.filters.startDate
                } // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={
                  this.state.endDate === null
                    ? this.state.endDate
                    : this.props.filters.endDate
                } // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
                focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
                showClearDates={true}
                numberOfMonths={1}
                isOutsideRange={() => {
                  false;
                }}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters
});

const mapDispatchToProps = dispatch => ({
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: startDate => dispatch(setStartDate(startDate)),
  setEndDate: endDate => dispatch(setEndDate(endDate)),
  setTextFilter: text => dispatch(setTextFilter(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
