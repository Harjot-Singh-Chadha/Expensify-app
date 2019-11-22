import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';


const now = moment();
console.log(now.format('MMM Do YYYY h:mm:ss A'))

export default class ExpenseForm extends React.Component {
    constructor(props){
      super(props);

     this.state = {
        description: props.expense ? props.expense.description: '',
        notes:props.expense ? props.expense.notes: '',
        amount:props.expense ? (props.expense.amount/100).toString(): '' ,
        createdAt:props.expense ? moment(props.expense.createdAt): moment(),
        calenderFocused:false,
        error:''
    };

  };
    

   onDescriptionChange = (e)=>{
        this.setState({
           
            description: e.target.value           
     
        });
    
    
};

  onNotesChange = (e) => {
        const notes = e.target.value;
       this.setState(()=>({notes}))

  };

  onAmountChange = (e) => {
     const amount = e.target.value;
     
     if(!amount || amount.match(/^\d*(\.\d{0,2})?$/)){
         
         this.setState(()=>({amount}));
        
     }

  };

 onDateChange = (createdAt)=> {
   if(createdAt){
    this.setState(()=> ({ createdAt }));
   }

 };

 onFocusChange = ({focused}) => {
   
    this.setState(()=> ({ calenderFocused: focused }));

 };

 onSubmit = (e) => {
   e.preventDefault();
   
   if(!this.state.description || !this.state.amount){
 
     this.setState(() => ({error:'Please enter descriptiona and amount'}))

   }else{
     
    this.setState(() => ({error:''}));
    this.props.onSubmit({
      description:this.state.description,
      amount:parseFloat(this.state.amount,10) * 100,
      createdAt:this.state.createdAt.valueOf(),
      notes:this.state.notes
    })
  
  }
    
 };

  render() {

    return(

    <div>
      {this.state.error && <p>{this.state.error}</p>}
      <form onSubmit = {this.onSubmit}> 
      <input 
        type="text"
        placeholder="Description"
        autoFocus
        value = {this.state.description}
        onChange = {this.onDescriptionChange}
       />
       <input 
        type="text"
        placeholder="Amount"   
        value={this.state.amount}
        onChange={this.onAmountChange}
       />

      <SingleDatePicker
        date={this.state.createdAt} // momentPropTypes.momentObj or null
        onDateChange={this.onDateChange} // PropTypes.func.isRequired
        focused={this.state.calenderFocused} // PropTypes.bool
        onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
        numberOfMonths = {1}
        isOutsideRange={()=>{false}}
      />

       <textarea
       placeholder="Add a note for your expense {Optional}"
       value = {this.state.notes}
       onChange = {this.onNotesChange}
       >

       </textarea>
       <button
       >Add Expense</button>
      </form>

    </div>

    )

  }

};