import * as actionTypes from '../actions/actionTypes';
import { utility } from '../utility';

const initialState = {
    ingredients:null,
        totalPrice:0,
        error:false,
        building:false
        
}

const INGREDIENT_PRICE = {
    salad:0.4,
    cheese:0.8,
    meat:1.7,
    bacon:1.2
}

const reducer = (state =initialState,action)=>{
    switch(action.type){
        case actionTypes.ADD_INGREDIENTS:
        return utility(state,{ ingredients:{
            ...state.ingredients,
            [action.ingredientsName]: state.ingredients[action.ingredientsName] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICE[action.ingredientsName],
        building:true
    })
        
        case actionTypes.REMOVE_INGREDIENTS:
        return{
            ...state,
            ingredients:{
                ...state.ingredients,
                [action.ingredientsName]: state.ingredients[action.ingredientsName] - 1
            },
            totalPrice: state.totalPrice - INGREDIENT_PRICE[action.ingredientsName],
            building:true
        };

        case actionTypes.SET_INGREDIENTS:
        return{
            ...state,
            ingredients:{
                salad:action.ingredients.salad,
                cheese:action.ingredients.cheese,
                meat:action.ingredients.meat,
                bacon:action.ingredients.bacon,
            },
            error:false,
            totalPrice:0,
            building:false
        };

        case actionTypes.FETCH_FAILED_INGREDIENTS:
        return{
            ...state,
            error:true
        };
        default:
        return state;
    }
};

export default reducer;