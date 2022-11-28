import React from 'react';

function InputField({ name, inputType, label, value, changeHandler})  {
    return (
        <>
        <label htmlFor={`${name}-field`}>{label}</label>
        <input
        name={`${name}-field`}
        id={`${name}-field`}
        type={inputType}
        value={value}
        onChange={(event) => changeHandler (event.target.value)}
        />

        </>

    );
}

export default InputField;