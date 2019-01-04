import React, { Component } from 'react'

import Aux from '../../../Hoc/aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component{



render(){

    const orderSummary = this.props.ingredients;
    const transfroemOrder = Object.keys(orderSummary)
                            .map(igKey=>(
                                <li key={igKey.concat('-'+orderSummary[igKey])}>
                                <span style={{textTransform:'capitalize'}}>
                                {igKey}: </span>{orderSummary[igKey]}</li>
                            ));

    return (
        <Aux>
        <h3>Your Order Cost <span style={{fontWeight:'bold',
    color:'yellow'}}>${this.props.price}</span></h3>
        <p> A Delicious burger with the 
            following ingredient:</p>
        <ul>
            {transfroemOrder}
        </ul>
        <p> Continue to Check Out </p>
      <Button btnType='Success' clicked={this.props.ApiServer}>Continue</Button>
    <Button btnType='Danger' clicked={this.props.clicked}>Cancel</Button>
        
        
            </Aux>
    )
}
}

export default OrderSummary;