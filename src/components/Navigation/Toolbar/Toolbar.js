import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavItem from '../NavigationItems/NavItem';
import Hamburgger from '../Toolbar/Hambugger/Hamburgger';
import classe from '../SideDrawer/SideDrawer.css'

const Toolbar = (props)=>{

    let attachedSideDrawer = [classe.SideDrawer, classes.Closed]

     if(props.open){
        attachedSideDrawer = [classe.SideDrawer, classes.Open]
     }

  return(  <header className={classes.Toolbar}>
        <Hamburgger  clicked ={props.close} />
    <div className={classes.Logo}>
      
       </div>
        <nav className={classes.DesktopOnly}>
            <NavItem idToken={props.idToken} />
        </nav>
        
    </header>
    )
}

export default Toolbar;