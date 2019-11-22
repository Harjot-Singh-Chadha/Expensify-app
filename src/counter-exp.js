class Counter extends React.Component{
      constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleSubOne=this.handleSubOne.bind(this);
        this.handleResetCount = this.handleResetCount.bind(this);
        this.state = {
            count: 0
        };
      }

     componentDidMount(){
        
        const count = parseInt(localStorage.getItem('count'))
        
        this.setState(()=>{
            return {
                count
            }
        })
     } 

     componentDidUpdate(prevState){

        const json = this.state.count;
        if(prevState.count != this.state.count){
            localStorage.setItem('count', json);
        }
        
           
     }

    
   
    handleAddOne() {
      
        this.setState((prevState)=>{
        return {
            count: prevState.count + 1
        }    
        });
    }

    handleSubOne(){

        this.setState((prevState)=>{
            return {
                count: prevState.count - 1
            }    
            });

    }   
     
    handleResetCount(){

        this.setState(()=>{
            return {
                count: 0
            }    
            });
      
    }

    render(){

    return (
      
        <div>
             <h1>Count:{this.state.count}</h1>
             <button onClick={this.handleAddOne}>inc</button>
             <button onClick={this.handleSubOne}>dec</button>
             <button onClick={this.handleResetCount}>Reset</button>   
        </div>

    );

   }

}

const approot = document.getElementById('app');
ReactDOM.render(<Counter />,approot)





// let count = 0 ;
// const addOne = () => {
//    count++ ;
//    renderCounter();
// };

// const subOne = ()=>{
//   count--;
//   renderCounter();
// };

// const resetCount = () => {
//     count=0;
//    renderCounter();
// };


// const approot = document.getElementById('app');


// const renderCounter = ()=>{
//     const templateTwo = (
//         <div>
//             <h1>Count:{count}</h1>
//             <button onClick={addOne}>inc</button>
//             <button onClick={subOne}>dec</button>
//             <button onClick={resetCount}>Reset</button>     
//         </div>
//     );

//     ReactDOM.render(templateTwo,approot)

// };

// renderCounter();