import React from 'react';
import classes from './Modal.css';

const modal = (props) => {
    const styles1 = {
        transition: 'translateY(0)',
        opacity: '1'
    };

    const styles2 = {
        transition: 'translateY(-100vh)',
        opacity: '0'
    };


    return (
        <div
            style={props.show ? styles1 : styles2}
            className={classes.Modal}>
            {props.children}
        </div>
    )
};

export default modal;
