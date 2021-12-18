import React from 'react';
import './checkoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({image,title,price,id}) {
    const [{basket},dispatch] = useStateValue();
    const removeFromCard = ()=>{
        dispatch({
            type:'REMOVE_FROM_CARD',
            id:id,
        })
    }
    return (
        <div className="checkout_product">
            <img src={image} alt="" />
            <h3>{title}</h3>
            <h3>{price}</h3>
            <button onClick={removeFromCard}>Remove from Cart</button>
            
        </div>
    )
}

export default CheckoutProduct
