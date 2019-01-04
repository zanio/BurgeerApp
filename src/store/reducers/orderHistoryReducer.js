import* as actionTypes from '../actions/actionTypes';
import { utility } from '../utility';

const initialState = {
    ingredients:null,
    error:null,
    loading:true
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.ORDER_RETRIEVE_FROM_SERVER:
        return utility(state,{ingredients:action.orderData,loading:false}) 

        case actionTypes.ORDER_RETRIEVE_FROM_SERVER_FAILED:
        return utility(state,{loading:false, error:action.error}) 
        
        default:
        return utility(state,null)
    }
}

export default reducer;