import React, { Component } from 'react';
import Order from '../../components/Burger/Order/Order';
import axios from '../../axios-orders';
import Spinner from '../../components/Burger/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';



class Orders extends Component {

    state = {
        orders: [],
        loading: false
    }
    componentDidMount() {
        this.setState({ loading: true })
        let fetchOrders = [];
        axios.get('/orders.json')
            .then(response => {
                for (let key in response.data) {
                    fetchOrders.push({
                        ...response.data[key],
                        id: key
                    })

                }
                this.setState({
                    loading: false,
                    orders: fetchOrders
                })
            })
            .catch(error => {
                this.setState({ loading: false })
                console.log(error)
            });
    }


    render() {
        console.log(this.state.orders)
        let order = <Spinner />
        if (!this.state.loading) {
            order = this.state.orders.map(order => {
                return (<Order key={order.id}
                    ingredients={order.ingredients}
                    price={order.burgerPrice} />)
            })
        }
        return (
            <div>

                {order}

            </div>
        )
    }
}

export default withErrorHandler(Orders, axios);