import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/BurgerIngredients/Burger';
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import classes from './BurgerBuilder.css';
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

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
        totalPrice: 4,
        ordered: false
    };

    addIngredientHandler = (type) => {
        const updatedIngredients = {
            ...this.state.ingredients
        };
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        updatedIngredients[type] = this.state.ingredients[type] + 1;

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    };

    removeIngredientHandler = (type) => {
        const updatedIngredients = {
            ...this.state.ingredients
        };
        if (!updatedIngredients[type]) return;

        const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
        updatedIngredients[type] = this.state.ingredients[type] - 1;

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    };

    order = () => {
        this.setState({ordered: true});
    };

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };

        for( let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <p className={classes.totalPrice}>Total: { this.state.totalPrice.toFixed(2) } $</p>
                <BuildControls
                    ordered={this.order}
                    disabledInfo={disabledInfo}
                    ingredientRemoved={this.removeIngredientHandler}
                    ingredientAdded={this.addIngredientHandler}/>
                <Modal show={this.state.ordered}>
                    <OrderSummary ingr={this.state.ingredients} total={this.state.totalPrice} />
                </Modal>
            </Aux>
        )
    }
}

export default BurgerBuilder;