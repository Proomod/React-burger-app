import React from 'react';
import classes from './Order.module.css';


const order = (props) => {

    const ingredients = []
    for (let items in props.ingredients) {
        ingredients.push({
            name: items,
            amount: props.ingredients[items]
        })
    }
    const ingredientOutput = ingredients.map(ig => {
        return <span key={ig.name}>{ig.name}({ig.amount})</span>
    })

    return (
        <div className={classes.Order}>
            <p>Ingredients:{ingredientOutput}</p>
            <p>Price<strong>{Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    )

}

export default order;

