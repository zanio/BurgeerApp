import React from 'react';

import classes from './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavItem from '../NavigationItems/NavItem';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../Hoc/aux';


const SideDrawer = (props)=>{

    let attachedSideDrawer = [classes.SideDrawer, classes.Closed]

     if(props.open){
        attachedSideDrawer = [classes.SideDrawer, classes.Open]
     }
    
   return( 
     
       <Aux>
           
     <Backdrop purchasing = {props.open} click={props.close}/> 
    
   <div className={attachedSideDrawer.join(' ')} onClick={props.close}>
   
        <div className = {classes.Logo}> 
           <Logo /> 
        </div>
            <nav>
            <NavItem />
            </nav>
        </div>
        </Aux>
);
}
export default SideDrawer;