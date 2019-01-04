import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControl.css'

const controls = [
    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'bacon'},
    {label:'cheese',type:'cheese'},
    {label:'Meat',type: 'meat'}
];

const BuildControls = (props) =>(
    <div className={classes.BuildControls}>
    <p>Current price:<strong> {props.price.toFixed(2)}</strong></p>
        {

            controls.map(ctrl =>(
                    <BuildControl key={ctrl.label}
                    label={ctrl.label}
                    added={()=>{props.add(ctrl.type)}}
                    removed={() => {props.remove(ctrl.type)}}
                    disabled={props.disabledInfokey[ctrl.type]}

                    />
            ))
        }
        <button className={classes.OrderButton}
        disabled={!props.purchase} onClick={props.ordered}
        > {props.isAuthenticated ? 'ORDER NOW': 'SIGN UP TO ORDER'}</button>
    </div>
)


export default BuildControls