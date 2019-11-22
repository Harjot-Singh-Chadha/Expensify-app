import React from 'react';
import { shallow } from 'enzyme';
import  ExpenseForm  from '../../Components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('Should render expense from correctly ',() => { 
   const wrapper = shallow(<ExpenseForm />);
   expect(wrapper).toMatchSnapshot();

});

test('Should render ExpenseFrom with expense data ',() => { 
    const wrapper = shallow(<ExpenseForm expense = {expenses[1]}/>);
    expect(wrapper).toMatchSnapshot();
 
 });

 test('Should render error for invalid ExpenseFrom submission ',() => { 
   const wrapper = shallow(<ExpenseForm />);
   expect(wrapper).toMatchSnapshot();

   wrapper.find('form').simulate('submit',{
      preventDefault:()=> {}
   });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('Should set description when the state change ',() => { 
   const value = "New description"
   const wrapper = shallow(<ExpenseForm />);
   wrapper.find('input').at(0).simulate('change',{
      target: { value }
   });
  expect(wrapper.state('description')).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

test('Should set Notes when the input change ',() => { 
   const value = "New Notes"
   const wrapper = shallow(<ExpenseForm />);
   wrapper.find('textarea').simulate('change',{
      target: { value }
   });
  expect(wrapper.state('notes')).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

test('Should set amount when the valid input change ',() => { 
   const value = "23.50"
   const wrapper = shallow(<ExpenseForm />);
   wrapper.find('input').at(1).simulate('change',{
      target: { value }
   });
  expect(wrapper.state('amount')).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

test('Should set amount when there is invalid input change ',() => { 
   const value = "12.111"
   const wrapper = shallow(<ExpenseForm />);
   wrapper.find('input').at(1).simulate('change',{
      target: { value }
   });
  expect(wrapper.state('amount')).not.toBe(value);
  expect(wrapper).toMatchSnapshot();
});

test('Should call onSubmit prop for valid form submission ',() => { 
   const onSubmitSpy = jest.fn();
   const wrapper = shallow(<ExpenseForm  expense={expenses[1]} onSubmit={onSubmitSpy}/>);
   wrapper.find('form').simulate('submit',{
      preventDefault:()=> {}
   });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
     description:expenses[1].description,
     amount:expenses[1].amount,
     notes:expenses[1].notes,
     createdAt:expenses[1].createdAt
  });
});

test('Should set new date on date Change ',() => { 
    
   const now = moment();
   const wrapper = shallow(<ExpenseForm />);
   wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
  
});

test('Should set new value of focus on focus Change ',() => { 
    
   const focused = true;
   const wrapper = shallow(<ExpenseForm />);
   wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({focused})
  expect(wrapper.state('calenderFocused')).toEqual(focused);
  
});