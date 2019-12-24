import database from '../firebase/firebase';

// ADD_EXPENSE

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
     return (dispatch) => {
        const {
            description = '',
            notes = '',
            amount = 0,
            createdAt = 0 
        } = expenseData;
        const expense = { description, notes, amount, createdAt };
       
      return database.ref('expenses')
        .push(expense)
        .then((ref)=>{
            dispatch(addExpense({
                id:ref.key,
                ...expense
            }))
        .catch((err)=>{
            console.log(err);
        })
        });
     };

};

// REMOVE_EXPENSE

export const removeExpense = ({id} = {}
) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const startRemoveExpense = ({ id } = {}) =>{
  
    return (dispatch) => {
      
   return database.ref(`expenses/${id}`).remove().then(()=>{
          dispatch(removeExpense({id}))
     });

    }

};

// EDIT_EXPENSE

export const editExpense = (id, updates) => ({
        type: 'EDIT_EXPENSE',
        id,
        updates
    });

 export const startEditExpense = (id, updates) =>{
  
        return (dispatch) => {
        
            return database.ref(`expenses/${id}`).update(updates).then(()=>{
              
              dispatch(editExpense(id, updates))
         });
    
        }
    
    };

//Set_Expenses

export const setExpenses = (expenses) => ({
    type: 'Set_Expenses',
    expenses
});

export const startSetExpense = () => {
     
    return (dispatch) => {
      
     return database.ref('expenses')
    .once('value')
    .then((DataSnapshot)=>{

      const expenses = [] ;
       DataSnapshot.forEach((childSnapshot)=>{
          expenses.push({
            id:childSnapshot.key,
            ...childSnapshot.val()
          })
       })
      dispatch(setExpenses(expenses));
    })
    .catch((err) =>{
         console.log(`Error getting data from the DB`,err);
    })
    
};

};

    