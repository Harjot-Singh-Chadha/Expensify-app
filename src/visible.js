class Visible extends React.Component{
 constructor(props){
     super(props);
     this.visibleToggle=this.visibleToggle.bind(this)
     this.state = {
         Visibility: false
     };

 }


    visibleToggle(){
        
        this.setState((state)=>{
            return {
                Visibility: !state.Visibility
            }
        });
   
    }


    render(){

        return (
  
            <div>
                <h1>Visibility Toggle</h1>
                <button  onClick={this.visibleToggle}>{this.state.Visibility ? "Hide Text" : "Show text"}</button>
                { 
                    this.state.Visibility && <p>Hi can you see me ???</p> 
                }
          </div>

        )

    }

}
const approot = document.getElementById('app');
ReactDOM.render(<Visible />, approot);



// let Visibility = false;

// const approot = document.getElementById('app');

// const visibleToggle = () => {
   
//     Visibility = !Visibility
//     render();
// };

// const render = () => {
// const temp =(
   
//    <div>
//     <h1>Visibility Toggle</h1>
//     <button  onClick={visibleToggle}>{Visibility ? "Hide Text" : "Show text"}</button>
//    { 
//        Visibility && <p>Hi can you see me ???</p>
    
//    }
//    </div>
// );
// ReactDOM.render(temp, approot);
// };

// render();