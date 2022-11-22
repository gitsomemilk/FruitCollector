import React from 'react';

const Button = ({ type, className, children,clickHandler,disabled}) => {
    return (
        <button
            type={ type }
            className={ className }
            onClick={ clickHandler }
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;