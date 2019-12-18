import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
//import database from '../../firebase/firebase';




const createMockStore = configureMockStore([thunk]);

test('Should setup remove expense action object', () => {
    const action = removeExpense({ id:'123abc' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id:'123abc'

    });
});

test('Should setup edit expense action object', () => {
    const action = editExpense('123abc',{notes:'hello'})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id:'123abc' ,
        updates: {
          notes: 'hello'
        }

    });

});

test('Should setup add expense action object with provided values', () => {
    const action = addExpense({description: 'Testing',note: 'This is a test',amount: 10,createdAt: 1111, id:'1234'});
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id : expect.any(String),
            description: 'Testing',
            note: 'This is a test',
            amount: 10,
            createdAt: 1111 
    }
});

});

// test('Should add expense to database and store',(done) => {
    
//     const store = createMockStore({});
//     const expenseData = {
        
//         description: 'Mouse',
//         note: 'This one is better test',
//         amount: 3000,
//         createdAt: 1000
// }
// store.dispatch(startAddExpense(expenseData)).then(() => {
//     const actions = store.getActions();
//     expect(actions[0]).toEqual({
//       type: 'ADD_EXPENSE',
//       expense: {
//         id: expect.any(String),
//         ...expenseData
//       }
//     });
    
//     return database.ref(`expenses/${actions[0].expense.id}`).once('value');
//   }).then((snapshot) => {
//     expect(snapshot.val()).toEqual(expenseData);
//     done();
//   });
// });

// test('Should add expense with default to database and store',(done) => {
//     const store = createMockStore({});
//     const expenseDefaults = {
//       description: '',
//       amount: 0,
//       note: '',
//       createdAt: 0
//     };
  
//     store.dispatch(startAddExpense({})).then(() => {
//       const actions = store.getActions();
//       expect(actions[0]).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//           id: expect.any(String),
//           ...expenseDefaults
//         }
//       });
  
//       return database.ref(`expenses/${actions[0].expense.id}`).once('value');
//     }).then((snapshot) => {
//       expect(snapshot.val()).toEqual(expenseDefaults);
//       done();
//     });
// });

// test('Should setup add expense action object with default values', () => {
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             id : expect.any(String),
//             description: '',
//             note: '',
//             amount: 0,
//             createdAt: 0 
//     }
// });

// });