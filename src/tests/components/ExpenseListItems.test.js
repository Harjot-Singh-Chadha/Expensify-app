import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import  ExpenseListItems  from '../../Components/ExpenseListItems';


test("Should render an expense item", () => {
    const wrapper = shallow(<ExpenseListItems {...expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
   
  });