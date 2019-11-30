import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { ExpenseSummary }  from '../../Components/ExpenseSummary';

test('Should render the ExpenseSummary component correctly with 1 expense', () => {

     const wrapper = shallow(<ExpenseSummary expensesCount = {1} expensesTotal={235}/>)
     expect(wrapper).toMatchSnapshot();

});

test('Should render the ExpenseSummary component correctly with multiple expenses', () => {
    
    const wrapper = shallow(<ExpenseSummary expensesCount = {3} expensesTotal={33224} />)
    expect(wrapper).toMatchSnapshot();

});