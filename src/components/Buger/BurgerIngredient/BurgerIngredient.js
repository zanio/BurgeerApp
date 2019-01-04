import React, {Component} from 'react';

// When ever you used PropTypes make sure is used with a stateful component
import PropTypes from 'prop-types';

import classes from './BurgerIngredient.css';


class BuggerIngredient extends Component {
 render(){
    let Ingredient = null;

    switch (this.props.type){
        case('bread-bottom'):
        Ingredient = <div className={classes.BreadBottom}></div>;
        break;

        case('bread-top'):
        Ingredient = (<div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div> </div>);
        break;

        case('meat'):
        Ingredient = <div className={classes.Meat}> </div>;
        break;

        case('cheese'):
        Ingredient = <div className={classes.Cheese}></div>;
        break;

        case('bacon'):
        Ingredient = <div className={classes.Bacon}></div>;
        break;

        case('salad'):
        Ingredient = <div className={classes.Salad}></div>;
        break;
        
        default:
        Ingredient = null;

    
    }
    return Ingredient;
            
            

 }   

    
    
}

BuggerIngredient.propTypes ={
    type:PropTypes.string.isRequired
};

export default BuggerIngredient;