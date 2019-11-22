import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouters from './routers/AppRouters';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import 'normalize.css/normalize.css';
import "./styles/styles.scss";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();


//  store.dispatch(addExpense({description: 'water bill', note:'testing', amount:4500}));
//  store.dispatch(addExpense({description: 'gas bill', note:'done',createdAt:1000}));
//  store.dispatch(addExpense({description: 'rent bill', note:'done', amount:2200}));

const jsx = (
     <Provider store = {store}>
         <AppRouters />
     </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));



