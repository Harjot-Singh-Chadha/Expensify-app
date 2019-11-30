const getExpenseTotal = (expenses) => {
       
    //     let totalAmount = 0;
    //    expenses.map(({amount}) => {
          
    //        totalAmount = totalAmount + amount;
                          
    //    });

    //    return totalAmount;

    return expenses
    .map((expense) => expense.amount)
    .reduce((acc, cur) => {
     return  acc = acc + cur
   },0);


};

export default getExpenseTotal;

  