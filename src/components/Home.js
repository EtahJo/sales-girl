import React from 'react';
import './home.css'
import Widget from './Widget';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
        <div className="home__slideShow">
            {/* slideshow*/}
            <ul>
                <li><img src="https://www.bellanaija.com/wp-content/uploads/2021/09/Cameroon_Fashion_Art-scaled.jpg" alt="" /></li>
                <li><img src="https://www.bellanaija.com/wp-content/uploads/2021/09/Cameroon_Fashion_Art_2_small-scaled.jpg" alt="" /></li>
                <li><img src="https://www.bellanaija.com/wp-content/uploads/2021/09/Cameroon_Fashion_Art_small-5.jpg" alt="" /></li>
                <li><img src="https://www.bellanaija.com/wp-content/uploads/2021/09/Cameroon_Fashion_Art_small-5.jpg" alt="" /></li>
            </ul>
       
        </div>
        <div className="home__slidingText">
            {/* sliding text*/}
            <h2>24/7 Free Delivery and Customer Service</h2>

        </div>
        <div className="home__widget">
             {/* widgets*/}
             <div className="home__row">
             <Widget
             title="Fashion"
             image="https://www.bellanaija.com/wp-content/uploads/2021/09/Cameroon_Fashion_Art_small-5.jpg"
             text="Cameroonian inspired fashion, both fashionable and modest"
             itemCounts="3"
             link="/fashion"
             />
             <Widget
             title="Kitchen Utensils"
             image="https://www.bellanaija.com/wp-content/uploads/2021/09/Cameroon_Fashion_Art_2_small-scaled.jpg"
             text="Cameroonian inspired fashion, both fashionable and modest"
             itemCounts="3"
             link="/kitchen-utensils"
             />
              <Widget
             title="Tech"
             image="https://www.bellanaija.com/wp-content/uploads/2021/09/Cameroon_Fashion_Art_2_small-scaled.jpg"
             text="Cameroonian inspired fashion, both fashionable and modest"
             itemCounts="3"
             link="/tech"
             />
            </div>
            <div className="home__row">
             <Widget
             title="Furniture"
             image="https://www.bellanaija.com/wp-content/uploads/2021/09/Cameroon_Fashion_Art_2_small-scaled.jpg"
             text="Cameroonian inspired fashion, both fashionable and modest"
             itemCounts="3"
             link="/furniture"
             />
             <Widget
             title="Books"
             image="https://www.bellanaija.com/wp-content/uploads/2021/09/Cameroon_Fashion_Art_2_small-scaled.jpg"
             text="Cameroonian inspired fashion, both fashionable and modest"
             itemCounts="3"
             link="/books"
             />
              <Widget
             title="Fashion"
             image="https://www.bellanaija.com/wp-content/uploads/2021/09/Cameroon_Fashion_Art_2_small-scaled.jpg"
             text="Cameroonian inspired fashion, both fashionable and modest"
             itemCounts="3"
             link="/fashion"
             />
            </div>

        </div>
        
        
         
         
           
        </div>
        </div>
    )
}

export default Home
