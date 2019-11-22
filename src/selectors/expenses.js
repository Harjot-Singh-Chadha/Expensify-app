import monent from 'moment'

// Get visible expenses

const getVisibleExpenses= (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
      const startDateMatch = startDate ? startDate.isSameOrBefore(monent(expense.createdAt),'day') : true;      
      const endDateMatch =  endDate ? endDate.isSameOrAfter(monent(expense.createdAt), 'day') : true;   
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
  
      return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
  };


export default getVisibleExpenses;