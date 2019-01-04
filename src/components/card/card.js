import React from 'react';
import classes from './card.css'

const Card = (props)=>{
    
    return(<div>
        {props.children}
        </div>)
}

export default Card

/*
 <ul className={classes.NavItem}>
        
      <NavList link="/" exact> Home </NavList>
        <NavList link="/buggerBuilder" exact> Burger Builder </NavList>

        {props.idToken ? <NavList link="/orders"> Order History </NavList>:null} 
        
        {!props.idToken ? <NavList link="/login"> Login </NavList>
        :<NavList link="/logout">LogOut </NavList>}
          </ul>


          const mapStateToProps = state=>{
    return{
        idToken:state.authReducer.idToken
    }
}

export default withRouter(connect(mapStateToProps)(NavItem));
*/