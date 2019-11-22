import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div>
    
     <h2>Expensify</h2>
     <NavLink to='/' activeClassName='is-active' exact={true}>Dashboard</NavLink>&nbsp;
     <NavLink to='/create' activeClassName='is-active'>Create</NavLink>&nbsp;
    
     
    </div>
    
 );

 export default Header