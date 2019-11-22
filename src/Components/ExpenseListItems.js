import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

 const ExpenseListItems = ({description,amount,createdAt,id}) => (

   <div>
   <Link to={`./edit/${id}`}>
       <h2>{description}</h2>
   </Link>
     <p >Amount: {amount} - CreatedAt: {createdAt}</p>
  
   </div>

);

export  default ExpenseListItems;