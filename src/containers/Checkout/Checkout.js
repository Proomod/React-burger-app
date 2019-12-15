import React, { Component } from 'react';
import classes from './checkout.module.css';
import CheckoutSummary from '../../components/Burger/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';



class Checkout extends Component {
    state = {
        ingredients: null,
        burgerPrice: null
    }

    UNSAFE_componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {}
        let price = null;
        for (let param of query.entries()) {
            if (param[0] === 'price') {
                price = param[1]
            }
            else {
                ingredients[param[0]] = +param[1]
            }
        }
        this.setState({
            ingredients: ingredients,
            burgerPrice: price
        })

    }
    orderSuccessHandler = () => {
        this.props.history.replace(this.props.match.path + '/contact-data');
    }
    orderCancelledHandler = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <React.Fragment>
                <div className={classes.checkout}>
                    <CheckoutSummary ingredients={this.state.ingredients}
                        orderSuccess={this.orderSuccessHandler}
                        orderCancelled={this.orderCancelledHandler}
                    />
                </div>
                <Route path={this.props.match.path + '/contact-data'} exact render={(props) => <ContactData
                    burgerPrice={this.state.burgerPrice}
                    ingredients={this.state.ingredients} {...props} />} />

            </React.Fragment>

        );

    }
}

export default Checkout;