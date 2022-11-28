import React from 'react';

function Button({ type, className, children,clickHandler,disabled}) {
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
}

export default Button;