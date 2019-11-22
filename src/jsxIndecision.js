console.log(`App Is Running`);

const app = {

    title:'Indecition app',
    subtitle: 'Putt Jaat da',
    options:[]
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    console.log("Form Submit Succes");

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();

    }
};

const resetCount = () => {
 app.options = [];
   
    render();
};

const onMakeDecision = () =>{
    const random = Math.floor(Math.random() * Math.floor(app.options.length));
    const selected = app.options[random];
     alert(selected);
}

const approot = document.getElementById('app');



const render = () => {
    
const template = (
 <div>
 <h1>{app.title}</h1>
  {app.subtitle && <p>{app.subtitle}</p>}
  <p>{app.options.length >0 ? 'Here are your options' : 'No options'}</p>
  <p>{app.options.length}</p>
  <button disabled={app.options.length ===0} onClick={onMakeDecision}>Random Item</button>
  <button onClick={resetCount}>Reset</button>
 <ol>
   {app.options.map((cur, index) => { 
        return <li key={index}>{cur}</li>
    })
   }   
 </ol>
 <form onSubmit={onFormSubmit}>
     <input type="text" name="option"></input>
     <button>Add Option</button>
 </form>
</div>
);

ReactDOM.render(template, approot);

}

render();