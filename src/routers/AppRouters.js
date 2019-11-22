import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import ExpenseDashboardPage from '../Components/ExpenseDashboardPage';
import AddExpensePage from '../Components/AddExpensePage';
import EditExpensePage from '../Components/EditExpensePage';
import HelpPage from '../Components/HelpPage';
import Header from '../Components/Header'; 
import NotFoundPage from '../Components/NotFoundPage';


 const AppRouters = () => (
    
    <BrowserRouter>
        <div>
            <Header />
        <Switch>
            <Route path = '/' component={ExpenseDashboardPage} exact={true}/>
            <Route path = '/create' component={AddExpensePage} />
            <Route path = '/edit/:id' component={EditExpensePage} />
            <Route path = '/help' component={HelpPage} />
            <Route component={NotFoundPage}/>
        </Switch>
        </div>
      
    </BrowserRouter>
   
);

export default AppRouters

