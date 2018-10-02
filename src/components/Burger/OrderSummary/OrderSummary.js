import React from 'react';
import Aux from "../../../hoc/Aux";

const orderSummary = (props) => {

    const ingSummary = Object.keys(props.ingr)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span>{igKey}:</span> {props.ingr[igKey]}
                </li>
            );
        });

    return  (
        <Aux>
            <h3> Your order:</h3>
            <p>Burger with:</p>
            <ul>
                {ingSummary}
            </ul>
            <p>Your total is {props.total.toFixed(2)} $</p>
        </Aux>
    )
};

export default orderSummary;