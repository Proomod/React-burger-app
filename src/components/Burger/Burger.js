import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import React from 'react';
import classes from './Burger.module.css';


const burger = (props) => {
    let ingredients = Object.keys(props.ingredients).map(IgKey => {
        return [...Array(props.ingredients[IgKey])].map((_, ix) => {
            return <BurgerIngredient key={IgKey + ix} type={IgKey} />
        })
    }).reduce((accumulator, arrayelement) => {
        return accumulator.concat(arrayelement)
    }, []);
    console.log(ingredients)
    if (ingredients.length === 0) {
        ingredients = <p>Please start adding some items</p>
    }
    return (
        <div>
            <div className={classes.Burger}>

                <BurgerIngredient type="bread-top"></BurgerIngredient>
                {ingredients}
                <BurgerIngredient type="bread-bottom" />
            </div>


        </div>


    );

}

export default burger;