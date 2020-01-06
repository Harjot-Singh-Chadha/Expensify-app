import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import ExpenseDashboardPage from '../Components/ExpenseDashboardPage';
import AddExpensePage from '../Components/AddExpensePage';
import { createBrowserHistory } from 'history';
import EditExpensePage from '../Components/EditExpensePage';
import LoginPage from '../Components/LoginPage';
import NotFoundPage from '../Components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();


 const AppRouters = () => (
    
    <Router history={history}>
      
        <div>
        <Switch>
            <PublicRoute path = '/' component={LoginPage} exact={true}/>
            <PrivateRoute path = '/dashboard' component={ExpenseDashboardPage}/>
            <PrivateRoute path = '/create' component={AddExpensePage} />
            <PrivateRoute path = '/edit/:id' component={EditExpensePage} />
            <Route component={NotFoundPage}/>
        </Switch>
        </div>
      
    </Router>
   
);

export default AppRouters

