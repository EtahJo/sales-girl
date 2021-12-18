import React from 'react';
import './header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useNavigate} from 'react-router';
import {useStateValue} from './StateProvider';
import {Link} from 'react-router-dom';
import { onAuthStateChanged,signOut } from 'firebase/auth';
import { auth } from '../firebase';

export default function Header() {
    const [{basket,user},dispatch] =useStateValue();
    const navigate = useNavigate();
    const handleAuthentication =()=>{
        if(user){
            signOut(auth);
        }
    }

    return (
        <div className='header'>
                <input type="text" 
                className="header__searchInput" 
                placeholder='What do you need?'
                />
                <SearchIcon
                className= "header__searchIcon"
                />      
              
        </div>
    )
}
