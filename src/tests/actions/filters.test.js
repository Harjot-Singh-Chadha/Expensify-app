import moment from 'moment';
import {setTextFilter, setEndDate, setStartDate, sortByAmount, sortByDate} from '../../actions/filters'

test('Should create an action object for Text Filter with a passed value', () => {
    const action = setTextFilter({text:'rent'})
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text:'rent'
    })

});

test('Should create an action object for Text Filter with no value', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text:''
    })

});


test('Should create an action object for StartDate',() => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({ 
    type: 'SET_START_DATE',
    startDate:moment(0)
})

});


test('Should create an action object for EndDate',() => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
       type: 'SET_END_DATE',
       endDate:moment(0)
    })
   
});

test('Should create an action object for sortByAmount',() => {
    const action = sortByAmount();
    expect(action).toEqual({
       type: 'SORT_BY_AMOUNT'
    })
   
});


test('Should create an action object for sortByDate',() => {
   const action = sortByDate();
   expect(action).toEqual({
      type: 'SORT_BY_DATE'
   })
  
});