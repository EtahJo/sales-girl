import React from 'react';
import "./product.css"
import { useStateValue } from './StateProvider';

function Product({id,title,text,image,designer,price,rating}) {
    const [{basket},dispatch] = useStateValue();

    const addToCart =()=>{
        //dispatch item into the data layer
        dispatch({
            type:'ADD_TO_CART',
            item:{
                id:id,
                title:title,
                image:image,
                text:text,
                designer:designer,
                price:price,
                rating:rating
            }
        })
    }
    return (
        <div className="product">
        <div className="product__info">
            <h3>{title}</h3>
            <h5>{designer}</h5>
            <img src={image} alt="" />
            <p>{text}</p>
        </div>
        <div className="product__price">
        <p><small>CFA frs</small><strong>{price}</strong></p>
        </div>
        <div className="product__rating">
        {Array(rating).fill().map((_,i)=>(
                     <p>⭐ </p>
                 ))}
        </div>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default Product
