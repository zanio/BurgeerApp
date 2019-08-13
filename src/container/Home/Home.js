import React, { Component } from 'react';

import classes from './home.css';
import Aux from '../../highordercomp/AuxHoc';

class Home extends Component{

    render(){
    return(
        <Aux>
        <div className={classes.Home}>
        <div className={classes.Overlay}></div>
           <div> <p>Make an order today!<span>Get your bugger delivered right at your door
               step without spending much.</span><button>Build Bugger</button></p></div>
        </div>
        </Aux>
    )
    }
}

export default Home
//hero section,
//tasteful burger
//Client testimonials,
//About Us
//Pricing