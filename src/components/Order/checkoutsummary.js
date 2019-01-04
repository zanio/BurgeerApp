import React from 'react';

import Burger from '../Buger/Burger';
import Button from '../UI/Button/Button';
import classes from './checkoutsummary.css'

const checkoutsummary  = (props) => {
return(
    <div className={classes.CheckoutSummary}>
        <h1> We Hope it taste well!<small>Here is the summary..</small></h1>
        <div style={{width:'100%',margin:'auto'}}>
        <Burger ingredients={props.ingredients}/>
        <Button 
        clicked={props.checkoutCancel}
        btnType ="Danger">CANCEL</Button>
        <Button
        clicked = {props.checkoutContinue}
        btnType ="Success">CONTINUE</Button>

        </div>
    </div>

);
}

export default checkoutsummary;