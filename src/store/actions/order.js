import * as actionTypes from './actionTypes';
import Axios from '../../orderAxios';

export const succesToServer = (id, orderData)=>{
    return {
        type:actionTypes.SUCCES_TO_SERVER,
        orderId: id,
        orderData:orderData
    }
}

export const faluireFromServer = (error)=>{
    return {
        type:actionTypes.FAILURE_FROM_SERVER,
        error:error
    }
}

export const purchaseBurgerStart = ()=>{
    return {
        type:actionTypes.PURCHASE_BURGER_START
        
    }
}



export const purchaseBurger = (orderData, idToken)=>{
    return dispatch =>{
        dispatch(purchaseBurgerStart())
        Axios.post(`/orders.json?auth=${idToken}`, orderData)
        .then( response => {
           dispatch(succesToServer(response.data.name,orderData))
    })
        .catch (error => {
            dispatch(faluireFromServer( error ))
        });
   
    }
    
}

export const purchaseInit = ()=>{
    return {
        type:actionTypes.PURCHASE_INIT
        
    }
}

