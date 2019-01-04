import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

import Order from '../../components/Order/Order';
import instance from '../../orderAxios';
import Spinner from '../../components/UI/Spinner/spinner';
import withErrorHandler from '../../Hoc/withErrorHandler/withErrorHandler';
import * as actionCreator from '../../store/actions/index';

class Orders extends Component {
    

    componentDidMount(){

        this.props.onGetOrder(this.props.idToken, this.props.userId);
       
    }

    render(){
        let orderExchange = <Spinner />

        const ingredients = new Array(this.props.ings);
        

        if(!this.props.loading){
           
        orderExchange = this.props.ings.map(outputOrder => (
            <Order 
            key={outputOrder.id} 

            ingredients = {outputOrder.ingredients}

            price = {outputOrder.price}
            />
        ))
    } else {

        if(this.props.ings === 0  && !this.props.loading){
            orderExchange =<p> You have made any order with 
                this application, start making orders and come
                 back to check your order histor</p>
        }
    }
    
    

    let redirect = null;
    if(!this.props.idToken){
        redirect = <Redirect to ="/"/>
    }
        
        return(
            <div>
            {redirect}
          {orderExchange}

                </div>
        );
    }
}
const mapStateToProps = state =>{
    return {
        ings: state.getOrder.ingredients,
        loading:state.getOrder.loading,
        error:state.getOrder.error,
        idToken:state.authReducer.idToken,
        userId:state.authReducer.localId
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onGetOrder: (idToken,userId)=> dispatch(actionCreator.getOrderHistory(idToken,userId))
    }
}
    


export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Orders, instance));