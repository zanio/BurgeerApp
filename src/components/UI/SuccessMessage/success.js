import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import classes from './success.css';
import Button from '../Button/Button';

class Success extends Component{

    returnHome = ()=> {
        this.props.history.push('/')
    }
       
    

    render(){
        return(
            <div className = {classes.Success}>
                <p>Thanks for making your order,
                     We would get back to you as soon as possible</p>
                     <Button clicked={this.returnHome} btnType="Success"> Go Back </Button>
                </div>
        );
    }
}
    


export default withRouter(Success);