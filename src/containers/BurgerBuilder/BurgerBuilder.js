import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.7,
    bacon: 1.2,
    meat: 1.4
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    };

    addIngredientHandler = (type) => {
        const updatedIngredients = {
            ...this.state.ingredients
        };
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        updatedIngredients[type] = this.state.ingredients[type] + 1;

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    };

    removeIngreddientHandler = (props) => {

    };

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Builder controls</div>
                <BuildControls
                ingredientAdded={this.addIngredientHandler}/>
            </Aux>
        )
    }
}

export default BurgerBuilder;