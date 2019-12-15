import React, { Component } from 'react';
import classes from './ContactData.module.css';
import Button from '../../../components/Burger/UI/Button/Button';
import axios from '../../../axios-orders';
import Spinner from '../../../components/Burger/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }
    formSubmitHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true })
        const order = {
            ingredients: this.props.ingredients,
            burgerPrice: this.props.burgerPrice,
            customer: {
                name: 'Motherfucker',
                address: "Wherever you want it to be"
            }
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false })
            })
            .catch(error => {
                this.setState({ loading: false })
            })

    }


    render() {
        console.log(this.props)
        let form = (
            <form className={classes.ContactData}>
                <input type='text' name='name' placeholder="your name"></input>
                <input type='text' name='email' placeholder='your email'></input>
                <input type='text' name='street' placeholder='street'></input>
                <input type='text' name='postal' placeholder='postaddress'></input>
                <Button btnType="Danger" clicked={this.formCancelHandler} >Cancel</Button>
                <Button btnType="Success" clicked={this.formSubmitHandler} >Checkout</Button>

            </form>
        )
        if (this.state.loading) {
            form = <Spinner />
        }

        return (
            <React.Fragment>

                <h1>You are in {this.props.location.pathname}</h1>
                {form}



            </React.Fragment>
        );

    }
}

export default ContactData;
