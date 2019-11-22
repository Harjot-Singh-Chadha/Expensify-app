import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

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
    const action = addExpense({description: 'Testing',note: 'This is a test',amount: 10,createdAt: 1111});
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

test('Should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id : expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0 
    }
});

});