import React from 'react';
import classes from './CheckoutSummary.module.css';
import Burger from '../../Burger';
import Button from '../../UI/Button/Button';


const checkoutSummary = (props) => {
    return (
        <React.Fragment>
            <div className={classes.checkoutSummary}>
                <p>We hope it tastes well</p>
                <Burger ingredients={props.ingredients} />
                <Button btnType='Success' clicked={props.orderSuccess}>Continue</Button>
                <Button btnType='Danger' clicked={props.orderCancelled}>Cancel</Button>


            </div>
        </React.Fragment>
    )


}


export default checkoutSummary;
