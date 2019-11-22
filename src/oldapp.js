class IndecisionAPP extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handleRandomPick = this.handleRandomPick.bind(this);
        this.handleRemoveSingle= this.handleRemoveSingle.bind(this);
        this.state = {
            options: []
        };
    }
    
    componentDidMount(){
     try{
 
        const options = JSON.parse(localStorage.getItem('options'));
       if(options)  this.setState(()=>({ options }))

     }catch(e){
           console.log(e)
     }
      


    }
    
    componentDidUpdate(prevProps, prevState){

        if(prevState.options.length !== this.state.options.length){
             const json = JSON.stringify(this.state.options);
             localStorage.setItem('options',json);
        }
    }


    handleAddOption(input) {
      if(!input){
          return 'Enter an Option'
      }else if(this.state.options.indexOf(input) > -1){

         return "This option already exist's"

      }else{
         this.setState((state)=>{
            return{
                options:  state.options.concat([input])
      }   
       
   })
}
}
    handleRemoveSingle(key){
    let changedArray = [...this.state.options.slice(0,key), ...this.state.options.slice(key+1, this.state.options.length)];
  
    this.setState(()=>{
        
        return {
            options: changedArray
        }
   

      })

    }

    handleRemoveAll(){
       
        this.setState(() => ({ options: [] }));

    }
    handleRandomPick() {
    
     const random = Math.floor(Math.random() * Math.floor(this.state.options.length));
     const selected = this.state.options[random];
     alert(selected);

    }

    render(){

        
        const subTitle = 'This is the way';

        return (

         
            <div>
                <Header  subTitle={subTitle}/>
               
                <Action 
                 hasOptions={this.state.options.length > 0 ? false:true}
                 handleRandomPick={this.handleRandomPick}    
                 />
               
                <Options 
                 options={this.state.options}
                 handleRemoveAll={this.handleRemoveAll}
                 handleRemoveSingle={this.handleRemoveSingle}

                 />
               
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}


const Header = (props)=>{

    return (
        <div>
        <h1>{props.title}</h1>
        { 
            props.subTitle && <h2>{props.subTitle}</h2>
        }
        </div>
        );
    }

Header.defaultProps = {

    title:'Enter some text'
};   


// class Header extends React.Component {

//     render() {

//         return (
//         <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subTitle}</h2>
//         </div>
//         );
//     }

// }

const  Action = (props)=>{

    return (
        <div>
            <button onClick={props.handleRandomPick} disabled={props.hasOptions}>What Should i do</button>
        </div>
              
          );
}

//  class Action extends React.Component {



//     render() {

//          return (
//        <div>
//            <button onClick={this.props.handleRandomPick} disabled={this.props.hasOptions}>What Should i do</button>
//        </div>
             
//          );

//     }

// }

const Options = (props) => {

    return (
        <div>
        <p>Add item functionality is online</p>
        { props.options.length ===0 && <p >Add an option</p> }
         <button onClick={props.handleRemoveAll}>Remove All</button>
        <Option option={props.options} handleRemoveSingle={props.handleRemoveSingle}/>
        </div>
     );
}

// class Options extends React.Component {
   
  

//     render(){

//         return (
//            <div>
//            <p>Options component here</p>
//            <button onClick={this.props.handleRemoveAll}>Remove All</button>
//            <Option option={this.props.options} handleRemoveSingle={this.props.handleRemoveSingle}/>
//            </div>
//         );
//     }
// }

class Option extends React.Component {
        constructor(props){
        super(props);
        this.handleRemoveSingle= this.handleRemoveSingle.bind(this);
    }
    
   handleRemoveSingle(index){
        
        
      //  const element = e.target.parentNode.parentNode.dataset.key;
      //  console.log(element);
        this.props.handleRemoveSingle(index);
      

        

        
   }
 //  handleRemoveSingle1(ind){
      // alert(ind)
   //    this.props.handleRemoveSingle(ind);
  // }
    render(){

          return (
        <div>

            <ol>
                 {
                 this.props.option.map((option, index) => {
                              return <li key={index} data-key={index}>
                                       {option}
                                     <button onClick={this.handleRemoveSingle.bind(this,index)}>
                                     <i className="fa fa-times" aria-hidden="true"></i> 
                                     </button> 
                                     </li>;
                        })
                 }
           </ol>
        </div>
    );

}

}

class AddOption extends React.Component {

    constructor(props){
        super(props);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.state = {

            error: undefined,
            input: ''
        }
        this.t1 = React.createRef();
    }

    handleAddOption(e){
        e.preventDefault();
            const input = e.target.elements.input.value.trim();
            const error = this.props.handleAddOption(input);
            this.t1.current.value = '';
            this.setState(()=>{
            return{
              error,
              input

           }
            })
           
           
    }    

    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='input' ref={this.t1} ></input>
                    <button>Add Option</button>
                </form>
                
            </div>
        );
    }
}




ReactDOM.render(<IndecisionAPP />, document.getElementById('app'));