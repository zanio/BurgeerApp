import React from 'react';
import NavList from '../NavigationItems/NavList/NavList';
import classes from './NavItem.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Card from '../../card/card';



const NavItem = (props)=>(

    <ul className={classes.NavItem}>
        
    <NavList link="/" exact> Home </NavList>
      <NavList link="/buggerBuilder" exact> Burger Builder </NavList>

      {props.idToken ? <NavList link="/orders"> Order History </NavList>:null} 
      
      {!props.idToken ? <NavList link="/login"> Login </NavList>
      :<NavList link="/logout">LogOut </NavList>}
        </ul>

);



  
  export default NavItem;
  