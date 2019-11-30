import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Should return 0 if there are no expenses', () => {

      const res = selectExpensesTotal([]);
      expect(res).toBe(0);

});

test('Should correctly add a single expense', () => {

    const res = selectExpensesTotal([expenses[1]]);
    expect(res).toBe(19500);

});

test('Should correctly add all the expenses amount', () => {

    const res = selectExpensesTotal(expenses);
    expect(res).toBe(24195);

});

// const getExpenseTotal = (expenses) => {
//     let totalAmount = 0;
//       expenses.map(({amount})=>{
          
//           totalAmount = totalAmount + amount;
                          
//       });

//       return totalAmount;

//   };

//   const Total = getExpenseTotal(expenses);
//   console.log(Total);

//   export default getExpenseTotal;