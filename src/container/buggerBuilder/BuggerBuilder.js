import React ,{Component} from 'react';
import { connect } from 'react-redux';

import Aux from '../../Hoc/aux';
import Burger from '../../components/Buger/Burger';
import instance from '../../orderAxios';
import BuldControls from '../../components/Buger/BuildControls/BuildControl';
import Modal from '../../components/UI/modal/Modal';
import OrderSummary from '../../components/Buger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/spinner';
import withErrorHandler from '../../Hoc/withErrorHandler/withErrorHandler';
import * as actionCreators from '../../store/actions/index';
// We use uppercase  when naming global variable...



class BuggerBuilder extends Component{

    state = {        
        totalPrice:4,
        purchasable:false,
        purchasing:false,
        persons:[],
     
    }

   
  // If you decide to use firebase to get data from the server thn uncomment 
  // this line

   componentDidMount(){

        this.props.onInitIngredients();
    }

    

// The code below is a method, the difference betweeen
// a method and an handler is that, an handler is declared as
//  a variable and sent as props to the intending component

updatePurchaseState (ingredients){
  
    const sum = Object.keys(ingredients)
    .map(igKey=>{
        
        return  ingredients[igKey]
    })
    .reduce((sum, el)=>{
        return sum + el;
    },0);
    return sum > 0;
}

    

    SendAlertHandler = ()=>{
        //alert('your order has been sent')
        this.props.onInitPurchase();

   this.props.history.push('/checkout');
  }
    
    purchasingHandler = ()=>{
        if(this.props.idToken){
            this.setState({purchasing:true})
        }else{
            this.props.onSetAuthRedirecPath('/checkout')
            this.props.history.push('/login')
        }
            
    }
    closePurchaseHandler = ()=>{
        this.setState({purchasing:false})
    }

    render(){
        const disabledInfo = {
            ...this.props.ings
        }

        for (let key in disabledInfo) {
            disabledInfo[key] =  disabledInfo[key] <= 0
        }

        let orderdetails = null;

        let burger = this.props.error ? <p> Inngredients cannot be loaded</p>:<Spinner /> 

        if(this.props.ings){

            burger = (
                <Aux>

            <Burger ingredients={this.props.ings} price={this.props.price}/> 
            <BuldControls add={this.props.onIngredientsAdded} 
                         remove={this.props.onIngredientsRemoved} 
                         disabledInfokey = {disabledInfo} 
                         price={this.props.price} 
                         isAuthenticated={this.props.idToken}
                         purchase = {this.updatePurchaseState(this.props.ings)}  
                         ordered={this.purchasingHandler}          
            />

                    </Aux>
            )
        }
        
         orderdetails =  <OrderSummary ingredients={this.props.ings} 
        clicked={this.closePurchaseHandler}
        ApiServer= {this.SendAlertHandler}
        price={this.props.price.toFixed(2)} 
        />
        
        return(
           
        <Aux>
           
                   <Modal purchasing ={this.state.purchasing}
                       clicked={this.closePurchaseHandler}
                        >
                    {orderdetails}
             </Modal>
            {burger}
            
           
        </Aux>
        )
    };
}

const mapStateToProps = state => {
   return{ 
       ings:state.buggerBuilder.ingredients,
        price:state.buggerBuilder.totalPrice,
        error:state.buggerBuilder.error,
        idToken:state.authReducer.idToken
   };
}

const mapDispatchToProps = dispatch => {
    return { 
        onIngredientsAdded: (igName)=> dispatch(actionCreators.addIngredients(igName)),
        onIngredientsRemoved: (igName)=> dispatch(actionCreators.removeIngredients(igName)),
        onInitIngredients: ()=> dispatch(actionCreators.iniIngredients()),
        onInitPurchase:() => dispatch(actionCreators.purchaseInit()) ,
        onSetAuthRedirecPath: (path)=>dispatch(actionCreators.setAuthRedirectPath(path))
    };
 }

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BuggerBuilder, instance));