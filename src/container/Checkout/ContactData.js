import React, { Component } from 'react';
import { connect } from 'react-redux';
import instance from '../../orderAxios'

import classes from './ContactData.css';
import Buttton from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/spinner';
import Input from '../../components/UI/input/Input';
import withErrorHandler from '../../highordercomp/withErrorHandler/withErrorHandler';
import * as actionCreators from '../../store/actions/index';
import { checkValidity } from '../../shared/utility';


class ContactData extends Component{
    state={
orderForm:{
        name:{
            elementType:'input',
            elementConfig:{
                type:'text',
                placeholder:'Enter your Name'
            },
            value:'',
            validation:{
                required:true
            },
            valid:false,
            touched:false
        },

        street:{
            elementType:'input',
            elementConfig:{
                type:'text',
                placeholder:'Enter your street'
            },
            value:'',
            validation:{
                required:true
            },
            valid:false,
            touched:false
        },

        zipCode:{
            elementType:'input',
            elementConfig:{
                type:'text',
                placeholder:'Enter your Zip Code'
            },
            value:'',
            validation:{
                required:true,
                minLength:5,
                maxLength:5
            },
            valid:false,
            touched:false
        },

        Country:{
            elementType:'input',
            elementConfig:{
                type:'text',
                placeholder:'Country'
            },
            value:'',
            validation:{
                required:true
            },
            valid:false,
            touched:false
        },

        email:{
            elementType:'input',
            elementConfig:{
                type:'email',
                placeholder:'enter your email'
            },
            value:'',
            validation:{
                required:true,
                isEmail:true,
                regex:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            },
            valid:false,
            touched:false
        },
        deliveryMethod:{
            elementType:'select',
            elementConfig:{
                options:[{value:'fastest',displayValue:'Fastest'},
                {value:'cheapest',displayValue:'cheapest'}]
            },
            value:'fastest',
            validation:{},
            valid:true
        },

    },
        formIsValid:false
    }

    orderHandler = (event)=>{
        event.preventDefault();

        const formData = {};

        for (let formElementIdentifier in this.state.orderForm){
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier]
        }

        const order = {
            ingredients:this.props.ings,
            price:this.props.price,
            orderData: formData,
            userId:this.props.userId
        }

        this.props.onOrderBurger(order,this.props.idToken);
    }

    

    InputchangedHandler = (event,inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };

        const updatedInputElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        updatedInputElement.value = event.target.value;

        updatedInputElement.valid = checkValidity(updatedInputElement.value,
            updatedInputElement.validation)
        updatedInputElement.touched = true;
        updatedOrderForm[inputIdentifier]= updatedInputElement

       let formIsValid = true;

       for(let inputIdentifier in updatedOrderForm){
           formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid
       }

        this.setState({orderForm:updatedOrderForm,formIsValid:formIsValid})
    }


    render(){
        let TransformedArray = []

        for (let key  in this.state.orderForm){

            TransformedArray.push({
                id:key,
                config:this.state.orderForm[key]
            });
        }
        const dynamicInput = TransformedArray.map( inputValue =>{ 
            return <Input key={inputValue.id}
            elementType={inputValue.config.elementType} 
            elementConfig={inputValue.config.elementConfig}
            value={inputValue.config.value} 
            invalid = {!inputValue.config.valid}
            touched = {inputValue.config.touched}
            shouldValidate = {inputValue.config.validation}
            clicked={(event) => this.InputchangedHandler(event,inputValue.id)}
            />

            });
        let form = (
    <form id="form" onSubmit ={this.orderHandler}>
            {dynamicInput}

        <Buttton clicked={this.orderHandler}
        disabled={!this.state.formIsValid}
                btnType="Success">Order
        </Buttton>
    </form>
    );

        if(this.props.loading){
            form = <Spinner/>
        }
        return(
            <div className={classes.ContactData}>
                <h4>Enter Your Contact details</h4>
                {form}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        ings:state.buggerBuilder.ingredients,
        price:state.buggerBuilder.totalPrice,
        loading:state.order.loading,
        idToken:state.authReducer.idToken,
        userId:state.authReducer.localId
    }
}

const mapDispatchToProps = dispatch => {
    return { 
        onOrderBurger: (orderData,idToken)=> dispatch(actionCreators.purchaseBurger(orderData,idToken)),
    };
 }

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData,instance));
