import moment from 'moment'
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined,{type:'@@INIT'});
  expect(state).toEqual({
    text:'',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
});

test('should setup sortBy to amount', () => {
  const state = filtersReducer(undefined,{type:'SORT_BY_AMOUNT'});
  expect(state).toEqual({
    text:'',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
});

test('should setup sortBy to date', () => {
  const testState = {
    text:'',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  }
  const state = filtersReducer(testState,{type:'SORT_BY_DATE'});
  expect(state).toEqual({
    text:'',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
});


test('should set the text filter', () => {
  const action = {

    type:'SET_TEXT_FILTER',
    text:'Rent'

  }
  const result = filtersReducer(undefined,action);
  expect(result).toEqual({
    text:'Rent',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
});

test('should set startDate filter', () => {
  const action = {

    type:'SET_START_DATE',
    startDate:moment()

  }
  const result = filtersReducer(undefined,action);
  expect(result.startDate).toEqual(action.startDate)
});

test('should set endDate filter', () => {
  const action = {

    type:'SET_END_DATE',
    endDate:moment()

  }
  const result = filtersReducer(undefined,action);
  expect(result.endDate).toEqual(action.endDate)
});