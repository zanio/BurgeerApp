import * as actionTypes from './actionTypes';
import Axios from '../../orderAxios';

export const orderRetrieveSuccess = (orderData)=>{
    return{
        type:actionTypes.ORDER_RETRIEVE_FROM_SERVER,
        orderData:orderData
    }
}

export const orderRetrieveFail = (error)=>{
    return{
        type:actionTypes.ORDER_RETRIEVE_FROM_SERVER_FAILED,
        error:error
    }
}

export const getOrderHistory = (idToken, userId)=>{
    return dispatch =>{
        const queryParams = `?auth=${idToken}&orderBy="userId"&equalTo="${userId}"`
        Axios.get(`/orders.json${queryParams}`)
        .then( response => {
            const fetchedOrders = []
            for (let key in response.data){
                fetchedOrders.push({
                    ...response.data[key],
                    id:key
                });
            }
           dispatch(orderRetrieveSuccess(fetchedOrders))
    })
        .catch (error => {
            dispatch(orderRetrieveFail( error ))
        });
   
    }
    
}