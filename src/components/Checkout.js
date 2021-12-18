import React from 'react';
import './checkout.css';
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from './StateProvider';
import {getCartTotal} from '../reducer';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const[{basket},dispatch] = useStateValue();
    return (
        <div className="checkout">
       
            <div className="checkout__left">
                <div className="checkout__leftTitle">
                <h1>Checkout</h1>
                </div>
                
                <div className="checkout__sections">
                <div className="checkout_sectionTitle">
                    <h3>What you ordered</h3>
                    
                </div>
                <div className="checkout_sectionProducts">
                    {basket.map(item=>(
                          <CheckoutProduct
                          id={item.id}
                          image={item.image}
                          title={item.title}
                          price={item.price}
                          
                          />
                    ))}
                  
                </div>
                
                </div>
               
            </div>
            <div className="checkout__right">
                <CurrencyFormat
                renderText={(value)=>(
                    <>
                     <h2>Total</h2>
                    <h4>Items:{basket?.length}</h4>
                    <h4>Price:{value}</h4>
                    </>
                )}
                decimalScale={2}
                value={getCartTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
               
                />
                <button>Pay Now</button>
            </div>
        </div>
    )
}

export default Checkout
