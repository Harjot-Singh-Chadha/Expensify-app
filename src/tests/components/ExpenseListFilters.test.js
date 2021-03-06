import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../Components/ExpenseListFilters';
import filters from '../fixtures/filters';
import moment from 'moment';

let sortByDate, sortByAmount, setStartDate, setEndDate, setTextFilter, wrapper;

beforeEach(() => {
   
    sortByDate = jest.fn();
    sortByAmount= jest.fn();
    setStartDate =jest.fn();
    setEndDate =jest.fn();
    setTextFilter =jest.fn();
   wrapper = shallow(
 <ExpenseListFilters 
   sortByDate = {sortByDate}
  sortByAmount = {sortByAmount}
  setStartDate = {setStartDate}
  setEndDate =  {setEndDate}  
  setTextFilter = {setTextFilter}
  filters = {filters[1]}
/>);

});


test('Should render Expense list filters component correcty', () => {

    expect(wrapper).toMatchSnapshot();

});

test('should render ExpenseListFilters with default data correctly', () => {
    wrapper.setProps({
      filters: filters[0]
    });
    expect(wrapper).toMatchSnapshot();
  });
  
  test('should handle text change', () => {
    const value = 'rent';
    wrapper.find('input').simulate('change', {
      target: { value }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith({text:value});
  });
  
  test('should sort by date', () => {
    const value = 'date';
    wrapper.setProps({
      filters: filters[1]
    });
    wrapper.find('select').simulate('change', {
      target: { value }
    });
    expect(sortByDate).toHaveBeenCalled();
  });
  
  test('should sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
      target: { value }
    });
    expect(sortByAmount).toHaveBeenCalled();
  });
  
  test('should handle date changes', () => {
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(8, 'years');
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
  });
  
  test('should handle date focus changes', () => {
    const calendarFocused = 'endDate';
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
  });
  