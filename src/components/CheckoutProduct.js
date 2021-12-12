import React from 'react';
import './checkoutProduct.css';

function CheckoutProduct({image,title,price}) {
    return (
        <div className="checkout_product">
            <img src={image} alt="" />
            <h3>{title}</h3>
            <h3>{price}</h3>
            <button>Remove from Cart</button>
            
        </div>
    )
}

export default CheckoutProduct
