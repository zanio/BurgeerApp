import * as actionTypes from './actionTypes';
import instance from '../../orderAxios';

export const addIngredients = (name)=>{
    return{
        type:actionTypes.ADD_INGREDIENTS,
        ingredientsName:name
    }
}

export const removeIngredients = (name)=>{
    return{
        type:actionTypes.REMOVE_INGREDIENTS,
        ingredientsName:name
    }
}

export const setIngredients = (ingredients)=>{
    return {
        type:actionTypes.SET_INGREDIENTS,
        ingredients:ingredients
    }
};

export const fetchIngredientsFailed = () => {
    return {
        type:actionTypes.FETCH_FAILED_INGREDIENTS
    }
};

export const iniIngredients = ()=>{
    return dispatch => {
        instance.get('https://burgerapp-order.firebaseio.com/ingredients.json')
       .then(response => {
        dispatch(setIngredients(response.data));
    })
    .catch( error => {
        dispatch(fetchIngredientsFailed()); 
    });
    };
}