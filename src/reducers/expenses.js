// EXPENSES_REDUCER

const expensesReducerDefaultState = [] ;

 const expensesReducer = (state = expensesReducerDefaultState ,action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
        return [
           ...state,
           action.expense
        ];

        case 'REMOVE_EXPENSE': 
        return state.filter(({id})=> {
            
        return id !== action.id 
        
        })
        
        
        case 'EDIT_EXPENSE': 
        return state.map((expense)=> {
           if(expense.id === action.id){
               return {
                   ...expense,
                   ...action.updates
               };  
           } 
           else {
            return expense;
        }  
        });

        case 'Set_Expenses':
        return action.expenses;


        default:
            return state;
    }

};

export default expensesReducer ; 