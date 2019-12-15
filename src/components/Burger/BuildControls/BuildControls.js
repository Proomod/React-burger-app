import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';
import buttonclass from './Buttoncode.module.css';
const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Meat', type: 'meat' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' }

]



const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Total Price :<strong>{props.price.toFixed(2)}$</strong></p>
            {controls.map(contr => {
                return (<BuildControl key={contr.label} label={contr.label}
                    added={() => props.ingreAdd(contr.type)} deleted={() => props.ingreDel(contr.type)}
                    disabledIngre={props.disabledIngre[contr.type]}
                />)
            })

            }
            <button onClick={props.purchasing} disabled={!props.purchasable} className={buttonclass.OrderButton}>ORDER NOW</button>

        </div>
    );





};


export default buildControls;