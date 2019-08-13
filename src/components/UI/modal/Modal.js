import React, { Component } from 'react';
import classes from './Modal.css';
import Aux from '../../../highordercomp/AuxHoc';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component{

  

  shouldComponentUpdate(nextProps, nextState){

    return nextProps.purchasing !== this.props.purchasing
    || nextProps.children !== this.props.children
  }

render(){

 /* let backdrop = null;

  if(this.props.purchasing){

    backdrop = <Backdrop purchasing={this.props.purchasing} />
  }*/

  return (
    <Aux>
    
      <Backdrop purchasing={this.props.purchasing} click={this.props.clicked} />
   
  {this.props.purchasing ? <div className={classes.Modal}>{this.props.children}</div> :null}

     </Aux>
  )
}
} 
   


export default Modal;

