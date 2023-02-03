import React from 'react';
import classes from './MyButton.module.css'

const MyButton = (props) => {
    return (
        <button
            className={classes.button}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default MyButton;