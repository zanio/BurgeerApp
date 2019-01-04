import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/checkoutsummary';
import ContactData from './ContactData';


class Checkout extends Component {


    checkoutCancelHandler = () => {
        this.props.history.goBack();

    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data')

    }

    render(){
        let summary = <Redirect to ='/' />
        if(this.props.ings){
            const purchasedRedirect = this.props.purchased ? <Redirect to ='/success' />:null
            summary =  (
            <div>
                {purchasedRedirect}
            <CheckoutSummary
               checkoutCancel = {this.checkoutCancelHandler}
               checkoutContinue = {this.checkoutContinuedHandler}
               ingredients={this.props.ings}/>
               <Route
               path={this.props.match.path + '/contact-data'} 
              component = {ContactData}
                  />

            </div>
            );
        }
       return(
           <div>
               {summary}
                

               </div>
       ); 
    }
}

const mapStateToProps = state => {
    return {
        ings: state.buggerBuilder.ingredients,
        purchased:state.order.purchased
    }
}


export default connect(mapStateToProps)(Checkout);