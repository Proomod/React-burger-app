import React, { Component } from 'react';
import axios from '../../axios-orders';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/Burger/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/Burger/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICE = {
    meat: 1.3,
    salad: 1,
    bacon: 1.5,
    cheese: 0.5
}


class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        burgerPrice: 4,
        isPurchaseable: false, //for checkoutbuttom
        purchasing: false,  //for modal show
        loading: false,
        error: false


    }

    addIngredientHandler = (type) => {
        const updatedIngrenum = this.state.ingredients[type] + 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedIngrenum;

        const priceAddition = INGREDIENT_PRICE[type] + this.state.burgerPrice
        this.setState({
            ingredients: updatedIngredients,
            burgerPrice: priceAddition
        })
        this.updatePurchaseState(updatedIngredients);


    }

    delIngredientHandler = (type) => {
        const updatedIngrenum = this.state.ingredients[type] - 1;
        // if (this.state.ingredients[type] <= 0) {
        //     return;
        // }
        const updatedIngredients = { ...this.state.ingredients }
        updatedIngredients[type] = updatedIngrenum;
        const priceDeletion = this.state.burgerPrice - INGREDIENT_PRICE[type];
        this.setState({
            ingredients: updatedIngredients,
            burgerPrice: priceDeletion
        })

        this.updatePurchaseState(updatedIngredients);
    }

    updatePurchaseState(updatedval) {
        const ingredients = updatedval;
        const sum = Object.keys(ingredients).map((items) => {
            return ingredients[items];
        }).reduce((initval, myitem) => {
            return initval + myitem

        }, 0)
        this.setState({
            isPurchaseable: sum > 0
        })


    }

    purchaseHandler = () => {
        this.setState({
            purchasing: true
        })
    }

    isCanceledHandler = () => {

        this.setState({
            purchasing: false,
        })

    }

    purchaseContinueHandler = (ingredients) => {


        const queryParams = []
        for (let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
        }
        queryParams.push('price=' + this.state.burgerPrice)
        const queryString = queryParams.join('&')
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString

        });
    }

    componentDidMount() {
        axios.get('/ingredients.json')
            .then(response => {
                this.setState({ ingredients: response.data })
            })
            .catch(error => this.setState({ error: true }))
    }




    render() {
        const disabledIngredients = { ...this.state.ingredients }
        for (let keys in disabledIngredients) {
            disabledIngredients[keys] = disabledIngredients[keys] <= 0
        }
        let orderSummary = null;



        let burger = this.state.error ? <p>can't load component</p> : <Spinner />
        if (this.state.ingredients) {
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls ingreAdd={this.addIngredientHandler} ingreDel={this.delIngredientHandler}
                        disabledIngre={disabledIngredients}
                        price={this.state.burgerPrice}
                        purchasable={this.state.isPurchaseable}
                        purchasing={this.purchaseHandler} />

                </Aux>);
            orderSummary = (
                <OrderSummary
                    continue={this.purchaseContinueHandler}
                    cancel={this.isCanceledHandler}
                    ingredientItems={this.state.ingredients}
                    totalAmount={this.state.burgerPrice} />
            )
        }
        if (this.state.loading) {
            orderSummary = <Spinner />
        }


        return (
            <Aux>
                <Modal show={this.state.purchasing}
                    clicked={this.isCanceledHandler}>
                    {orderSummary}

                </Modal>
                {burger}



            </Aux >
        );

    }

}
export default withErrorHandler(BurgerBuilder, axios);

//ingreDelete={this.deleteIngredientHandler}