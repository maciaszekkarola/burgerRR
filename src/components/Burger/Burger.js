import Ingredient from "./Ingredient";
import React from 'react';
import classes from './Burger.css'

const burger = (props) => {
    const ingredientsArray = Object.keys(props.ingredients)
        .map( ingr => {
            return [...Array(props.ingredients[ingr])].map((_, i) => {
                return <Ingredient type={ingr} key={ingr+i}/>
            })
        });
    return (
        <div className={classes.Burger}>
            <Ingredient type={'bread-top'}/>
            {ingredientsArray}
            <Ingredient type={'bread-bottom'}/>
        </div>
    )
};

export default burger;