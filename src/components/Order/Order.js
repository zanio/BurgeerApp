import React from 'react';

import classes from './Order.css';

const order = (props) => {

    const ingredientsData = []

    for(let ingredientsName in props.ingredients){
        ingredientsData.push({
            name:ingredientsName,
            amount:props.ingredients[ingredientsName]
        });

    }
    


    const divDataOrder = ingredientsData.map(igKeyOrder => {
    return (<span key={igKeyOrder.name}> <span>{igKeyOrder.name}: <i>{igKeyOrder.amount}</i> </span></span>) 
    });

    

    return(
    <div className={classes.Order}>
        <p>Your Burger contains the following ingredients:</p>
        
           <p> {divDataOrder}</p>

            <p><strong>Total Price:</strong> ${props.price.toFixed(2)}</p>
         
        </div>
);

}

export default order;