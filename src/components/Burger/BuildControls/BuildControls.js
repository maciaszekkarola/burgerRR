import React from 'react';
import classes from './BuildControls.css';
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
];

const buildControls = (props) => (
    <div className={classes.BuildControl}>
        {
            controls.map( (ing) => {
                return <BuildControl
                    added={() => props.ingredientAdded(ing.type)}
                    key={ing.label}
                    label={ing.label}/>
            })
        }
        <BuildControl />

    </div>

);

export default buildControls;
