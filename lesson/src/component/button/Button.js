import React from 'react';
import classes from "./Button.module.css";

const Button = ({text}) => {
    return (
        <div className={classes.color} >
            <h1>{text}</h1>
        </div>
    );
};

export default Button;