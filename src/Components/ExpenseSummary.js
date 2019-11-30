import React from 'react';
import { connect } from 'react-redux';
import SelectExpensesTotal from '../selectors/expenses-total';
import SelectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpenseSummary = (props) => (

    <div>
      
      <p>Viewing {props.expensesCount} {props.expensesCount ===1 ? 'expense' : 'expenses'} totalling {numeral(props.expensesTotal / 100).format('$0,0.00')}</p>
    </div>

);

const mapStateToProps = (state) => {

    const visibleExpenses = SelectExpenses(state.expenses, state.filters);
    return{
        expensesTotal:SelectExpensesTotal(visibleExpenses),
        expensesCount:visibleExpenses.length
    }  
};

export default connect(mapStateToProps)(ExpenseSummary);





