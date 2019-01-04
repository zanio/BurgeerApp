import * as actionTypes from '../actions/actionTypes';
import { utility } from '../utility';


const initialState = {
    order:[],
    loading: false,
    purchased: false
        
}



const reducer = (state = initialState,action)=>{
    switch(action.type){
        case actionTypes.PURCHASE_INIT:
        return utility(state,{purchased:false})   

        case actionTypes.PURCHASE_BURGER_START:
        return utility(state,{loading:true})

        case actionTypes.SUCCES_TO_SERVER:
        const newOrder = {
            ...action.orderData,
            id:action.orderId
        }
        return utility(state,{loading:false, purchased:true, order:state.order.concat(newOrder)}) 

        case actionTypes.FAILURE_FROM_SERVER:
        return utility(state,{loading:false})
        default:
        return state;
    }
};

export default reducer;