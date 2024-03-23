import React from 'react';
import './Input.css';

function Input({ value, onChange, placeholder, onFocus, type, name, specialClass}) {
    const inputClassName = `input-style ${specialClass || ''}`;

    return (
        <input
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            onFocus={onFocus}
            className={inputClassName} 
        />
    );
}

export default Input;