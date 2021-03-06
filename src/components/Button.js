import React from 'react';
import "./button.css"

function Button(name) {
    return (
        <div className="button">
            <button>{name}</button>
        </div>
    )
}

export default Button
