import React from 'react';
import { withRouter } from 'react-router-dom';


import BuggerIngredient from '../Buger/BurgerIngredient/BurgerIngredient';
import classes from './BurgerIngredient/Burger.css';

const Burger = (props)=>{
    //To convert an object to array..
    let transformedBurger = Object.keys(props.ingredients).map( igKey => {
        return [...Array(props.ingredients[igKey])].map((_,i) => {
            return <BuggerIngredient key={igKey + i} type={igKey} />
        });
    })
    // The reduce function is an iretable function on each element of an array just like the 
    // map function does something to each element of an array, typically, the syntax looks like this,
    /*
    arr.reduce((previouValue, currentValue)=>previousValue + currentValue,100)
    */ 
    .reduce((arr,el)=>{
        return arr.concat(el)
    },[]);

    if (transformedBurger.length ===0){

        const style= {
            color:'red',
            fontWeight:'normal',
            backgroundColor:'white'
        }

        transformedBurger = <p style={style} >Please start adding Cheese and other items:</p>
    }

    return (
        <div className={classes.Burger}>
        <BuggerIngredient type='bread-top' />
        {transformedBurger}
        <BuggerIngredient type='bread-bottom' />
        </div>
    )
}

export default withRouter(Burger);