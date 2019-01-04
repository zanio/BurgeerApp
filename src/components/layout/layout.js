import React, { Component } from 'react';
import Aux from '../../Hoc/aux';
import classes from '../../components/layout/layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';



class Layout extends Component{

state={
    showSideDrawer:  false
}
sideDrawerCloseHandler = () => {
    this.setState({showSideDrawer:true})
}

sideDrawerToggleHandler = ()=>{
    this.setState(prevState =>{
        return { showSideDrawer:!prevState.showSideDrawer}
    });
}
    render(){

        
        
        return(
            <Aux> 
            <Toolbar close={this.sideDrawerToggleHandler} idToken={this.props.idToken}/>
            <SideDrawer open={this.state.showSideDrawer} close={this.sideDrawerToggleHandler}/>
            <main className={classes.Layout}>{this.props.children}</main>
            </Aux>)
  
};
}

export default Layout