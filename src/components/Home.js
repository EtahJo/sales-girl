import React from 'react';
import './home.css'
import Widget from './Widget';
import {Link} from 'react-router-dom';
import Fashion from './Fashion';
import Bestsellers from './Bestsellers';
import Kitchen from './Kitchen';
import Tech from './Tech';
import Furniture from './Furniture';
import Book from './Book';
import Designs from './Designs';

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
            <h2>24/7 Free Delivery and <Link to="/">Customer Service</Link></h2>

        </div>
        <div id='bestseller'>
            <Bestsellers/>
        </div>
        <div id='fashion'>
        <Fashion/>
        </div>
        <div id='kitchen'>
            <Kitchen/>
        </div>
        <div id="tech">
            <Tech/>
        </div>
            <div id="furnitue">
                <Furniture/>
            </div>
        <div id="books">
            <Book/>
        </div>
        <div id="design">
            <Designs/>
        </div>
        </div>
         
           
      
        </div>
    )
}

export default Home
