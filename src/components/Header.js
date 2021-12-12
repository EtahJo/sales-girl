import React from 'react';
import './header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useNavigate } from 'react-router';
import {useStateValue} from './StateProvider';

export default function Header() {
    const [{basket},dispatch] =useStateValue()
    const navigate = useNavigate()
    return (
        <div className='header'>
            <div className="header__search">
                <input type="text" className="header__searchInput" 
                
                />
                <SearchIcon
                className= "header__searchIcon"
                />
            </div>
            
                <div className="drop__down">
                <select name="dropdown" id="dropdown">
                    <option disabled selected value>Select the Item Type</option>
                    <option>Fashion</option>
                    <option>Kitchen Utensils</option>
                    <option>Furniture</option>
                    <option>Tech</option>
                    <option>Books</option>
                </select>
                </div>
                <div className="header__nav"> 
            <div className="header__option">
            
                <span className="header__optionLineOne">
                    Hi There
                </span>
                <span className="header__optionLineTwo">
                    Sign In
                </span>
            </div>
            <div className="header__option">
                <span className="header__optionLineOne">
                    For help
                </span>
                <span className="header__optionLineTwo">
                    Contact Us
                </span>

            </div>
            <div className="header__optionBasket">
            <button onClick={e=>navigate('/checkout')}>
            <ShoppingBasketIcon
            className="header__optionBasket"
            />
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
            </button>
            </div>
            </div>
            
        </div>
    )
}
