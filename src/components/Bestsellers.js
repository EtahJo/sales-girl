import React from 'react';
import Product from './Product';
import './bestseller.css';

function Bestsellers() {
    return (
        <div className='bestseller'>
            <div className="bestseller__title">
                <h1>Best Sellers for The Month</h1>
            </div>
            <div className="bestseller__products">
            <div className="bestseller__row">

                    <Product
                    id='1234'
                    title="dress 1"
                    designer="Liz"
                    image="https://www.bellanaija.com/wp-content/uploads/2021/09/Cameroon_Fashion_Art_2_small-scaled.jpg"
                    text="include text"
                    price={3000}
                    rating={4}
                    />
                    <Product
                    id='12345'
                    title="dress 1"
                    designer="Liz"
                    image="https://www.bellanaija.com/wp-content/uploads/2021/09/Cameroon_Fashion_Art_2_small-scaled.jpg"
                    text="include text"
                    price={3000}
                    rating={5}
                    />
                    <Product
                    id='12346'
                    title="dress 1"
                    designer="Liz"
                    image="https://www.bellanaija.com/wp-content/uploads/2021/09/Cameroon_Fashion_Art_2_small-scaled.jpg"
                    text="include text"
                    price={3000}
                    />
                    <Product
                    id='12346'
                    title="dress 1"
                    designer="Liz"
                    image="https://www.bellanaija.com/wp-content/uploads/2021/09/Cameroon_Fashion_Art_2_small-scaled.jpg"
                    text="include text"
                    price={3000}
                    />

                    </div >
                    <div className="bestseller__row">

                    <Product
                    id='12348'
                    title="dress 1"
                    designer="Liz"
                    image="https://www.bellanaija.com/wp-content/uploads/2021/09/Cameroon_Fashion_Art_2_small-scaled.jpg"
                    text="include text"
                    price={3000}
                    />
                    <Product
                    id='12349'
                    title="dress 1"
                    designer="Liz"
                    image="https://www.bellanaija.com/wp-content/uploads/2021/09/Cameroon_Fashion_Art_2_small-scaled.jpg"
                    text="include text"
                    price={3000}
                    />
                    <Product
                    id='12391'
                    title="dress 1"
                    designer="Liz"
                    image="https://www.bellanaija.com/wp-content/uploads/2021/09/Cameroon_Fashion_Art_2_small-scaled.jpg"
                    text="include text"
                    price={3000}
                    />
                    <Product
                    id='123492'
                    title="dress 1"
                    designer="Liz"
                    image="https://www.bellanaija.com/wp-content/uploads/2021/09/Cameroon_Fashion_Art_2_small-scaled.jpg"
                    text="include text"
                    price={3000}
                    />
                    </div >
            </div>
        </div>
    )
}

export default Bestsellers
