import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../UI/Button/Button';


const OrderSummary = (props) => {

    const orderList = Object.keys(props.ingredientItems).map(igKey => {
        return (
            <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}> {igKey}</span>:{props.ingredientItems[igKey]}
            </li>
        )
    }

    )

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with following items:</p>
            <ul>
                {orderList}
            </ul>

            <p><strong>Your Total: {props.totalAmount.toFixed(2)}$</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType='Danger' clicked={props.cancel}>CANCEL</Button>
            <Button btnType='Success' clicked={props.continue}>CHECKOUT</Button>

        </Aux>
    )
}

export default OrderSummary;
