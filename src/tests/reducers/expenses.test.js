import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
test('Should set default state', () => {
 
    const state = expensesReducer(undefined,{type:'@@INIT'})
    expect(state).toEqual([])

});

 test('should remove an expense by id', () => {
    
    const action = {
      type:'REMOVE_EXPENSE',
      id:expenses[0].id
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([expenses[1], expenses[2]]);
 });

 test('should not remove an expense if id not found', () => {
    
    const action = {
      type:'REMOVE_EXPENSE',
      id:'-1'
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
 });

 test('should add an expense', () => {
    const expense = {
        id : 4,
        description:'Adding an expense for testing',
        note: '',
        amount: 30002,
        createdAt: 0 
    }
    const action = {
      type:'ADD_EXPENSE',
      expense
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([...expenses, expense]);
 });



 test('should edit an expense by id', () => {
    const description = 'just grying to edit';
    const action = {
      type:'EDIT_EXPENSE',
      id:expenses[0].id,
      updates:{
        description
      }
    };
    const state = expensesReducer(expenses,action);
    expect(state[0].description).toBe(description);
 });

 test('should not edit an expense if id is not found', () => {
    const updates = {
        description: 'just edited'
    }

    const action = {
      type:'EDIT_EXPENSE',
      id:'-1',
      updates
      
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
 });