import React from 'react';
import BurgerLogo from '../../assets/Images/127 burger-logo.png';
import classes from './Logo.css'
import { NavLink } from 'react-router-dom';

const Logo = (props)=>(
    <div className={classes.Logo}>
     <NavLink to={'/'} >  <img src={BurgerLogo} alt="MyBurgerLogo" />
     </NavLink>
  
    </div>
);

export default Logo;