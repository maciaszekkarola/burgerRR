import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    state = {
        igredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    };

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.igredients}/>
                <div>Builder controls</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;