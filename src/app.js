import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouters from './routers/AppRouters';
import { startSetExpense } from './actions/expenses';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import "./styles/styles.scss";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';


const store = configureStore();



//  store.dispatch(addExpense({description: 'water bill', note:'testing', amount:4500}));
//  store.dispatch(addExpense({description: 'gas bill', note:'done',createdAt:1000}));
//  store.dispatch(addExpense({description: 'rent bill', note:'done', amount:2200}));

const jsx = (
     <Provider store = {store}>
         <AppRouters />
     </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpense()).then(()=>{
    ReactDOM.render(jsx, document.getElementById('app'));
});




