import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import expensesReducer from '../reducers/expenses';
import filtersReducers from '../reducers/filters';
import authReducers    from '../reducers/auth';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;

export default () => {
    const store = createStore(
        combineReducers({
          expenses: expensesReducer,
          filters: filtersReducers,
          auth: authReducers
        }),
      composeEnhancers(applyMiddleware(thunk))
     
     );

  return store;   
}


// Store Creation 

