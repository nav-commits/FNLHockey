import React from 'react';
import './Button.css';

function Button({
    title,
    onClick,
    type,
    color,
    marginTop,
    width,
    disabled,
    marginLeft,
    textColor,
    icon,
}) {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            style={{
                backgroundColor: disabled ? 'grey' : color,
                margin: marginTop,
                width: width,
                marginLeft: marginLeft,
                color: textColor,
            }}
            className='button-style'
            type={type}
        >
            {icon && title ? <div className='icon-button'>{title} {icon}</div>  : title}
        </button>
    );
}

export default Button;
