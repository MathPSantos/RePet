import React from 'react';

import './styles.css';

const Button = ({ outlined, text }) => {
    return (
        <button className={`${outlined && 'outlined'}`}>
            {text}
        </button>
    )
};

export default Button;
