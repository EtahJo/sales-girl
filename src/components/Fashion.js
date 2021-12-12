import React from 'react';
import "./fashion.css"
import Product from './Product';

function Fashion() {
    return (
        <div className="fashion">
            <div className="fashion__title">
            <h1>Fashion Page</h1>
            </div>
            <div className="fashion__body">
            <div className="fashion__row">
                <Product
                title="dress 1"
                designer="Liz"
                image="https://www.bellanaija.com/wp-content/uploads/2021/09/Cameroon_Fashion_Art_small-5.jpg"
                text="include text"
                price={3000}
                rating={3}
                />
                <Product
                title="dress 1"
                designer="Liz"
                image="https://www.bellanaija.com/wp-content/uploads/2021/09/Cameroon_Fashion_Art_2_small-scaled.jpg"
                text="include text"
                price={3000}
                rating={4}
                />
                <Product
                title="dress 1"
                designer="Liz"
                image="https://www.bellanaija.com/wp-content/uploads/2021/09/Cameroon_Fashion_Art_2_small-scaled.jpg"
                text="include text"
                price={3000}
                rating={5}
                />
                 <Product
                title="dress 1"
                designer="Liz"
                image="https://www.bellanaija.com/wp-content/uploads/2021/09/Cameroon_Fashion_Art_2_small-scaled.jpg"
                text="include text"
                price={3000}
                />
                <Product
                title="dress 1"
                designer="Liz"
                image="https://www.bellanaija.com/wp-content/uploads/2021/09/Cameroon_Fashion_Art_2_small-scaled.jpg"
                text="include text"
                price={3000}
                />
                
            </div >
            <div className="fashion__row">
                <Product
                title="dress 1"
                designer="Liz"
                image="https://www.bellanaija.com/wp-content/uploads/2021/09/Cameroon_Fashion_Art_2_small-scaled.jpg"
                text="include text"
                price={3000}
                />
                <Product
                title="dress 1"
                designer="Liz"
                image="https://www.bellanaija.com/wp-content/uploads/2021/09/Cameroon_Fashion_Art_2_small-scaled.jpg"
                text="include text"
                price={3000}
                />
                <Product
                title="dress 1"
                designer="Liz"
                image="https://www.bellanaija.com/wp-content/uploads/2021/09/Cameroon_Fashion_Art_2_small-scaled.jpg"
                text="include text"
                price={3000}
                />
                 <Product
                title="dress 1"
                designer="Liz"
                image="https://www.bellanaija.com/wp-content/uploads/2021/09/Cameroon_Fashion_Art_2_small-scaled.jpg"
                text="include text"
                price={3000}
                />
                <Product
                title="dress 1"
                designer="Liz"
                image="https://www.bellanaija.com/wp-content/uploads/2021/09/Cameroon_Fashion_Art_2_small-scaled.jpg"
                text="include text"
                price={3000}
                />
            </div >
            <div className="fashion__row">
                
            </div >
            </div>
        </div>
    )
}

export default Fashion
