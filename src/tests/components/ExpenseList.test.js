import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../Components/ExpenseList';
import expenses from '../fixtures/expenses';

test("Should render expense list with expense items", () => {
  const wrapper = shallow(<ExpenseList expenses={expenses}/>);
  expect(wrapper).toMatchSnapshot();
 
});

test("Should render expense list with empty message", () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>);
    expect(wrapper).toMatchSnapshot();
   
  });