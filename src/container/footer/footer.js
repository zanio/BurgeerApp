import React, { Component }  from 'react';
import classes from './foter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faRecycle} from '@fortawesome/free-solid-svg-icons'

class Footer extends Component{
    render(){
        return(
            <div className={classes.Layout}>
                <p>&copy; 2018 Aniefiok Akpan <FontAwesomeIcon className={classes.Font}
                 icon={faRecycle} color='coral'
                 /> 
               
                </p>
                </div>
        )
    }
}

export default Footer;
