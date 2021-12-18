import React from 'react';
import './preheader.css';
import { Link } from 'react-router-dom';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {useStateValue} from './StateProvider';
import { useNavigate} from 'react-router';
import { HashLink } from 'react-router-hash-link';


import { onAuthStateChanged,signOut } from 'firebase/auth';
import { auth } from '../firebase';

export default function Preheader() {
    const [{basket,user},dispatch] =useStateValue();
    const navigate = useNavigate();
    const handleAuthentication =()=>{
        if(user){
            signOut(auth);
        }
    }
    return (
        <div className='pre__header'>
            <div className="preheader__container">
        
            <div className="preheader__option">
            
                <span className="preheader__optionLineOne">
                 Your Orders
                </span>
                <span className="preheader__optionLineTwo">
                & Returns
                   
                </span>
            </div>
         <div className="preheader__middle">
             <HashLink smooth to ='/#fashion'>
             <button >
                <strong>FASHION</strong>
                <small>120+ Items</small>
            </button>
             </HashLink>
           
            <HashLink smooth to ="/#kitchen">
            <button>
                <strong>KITCHEN</strong>
                <small>20+ Items</small>
            </button>
            </HashLink>
           <HashLink smooth to="/#tech">
           <button>
                <strong>TECH</strong>
                <small> 30+ Items</small>
            </button>
           </HashLink>
            
            <Link to ='/'>
             <h1>Sales Girl</h1>
             </Link>
             <HashLink smooth to="/#furniture">
             <button>
                <strong>FURNITURE </strong>
                <small>40+  Items</small>
            </button>
             </HashLink>
            <HashLink smooth to="/#books">
            <button>
                <strong>BOOKS</strong>
                <small>70+ Items</small>
            </button>
            </HashLink>
            <HashLink smooth to = "/#bestseller">
            <button>
                <strong>WEEKLY TOP</strong>
                <small>6 Items</small>
            </button>
            </HashLink>
           
            <div className="preheader__basket">
            <button  onClick={e=>navigate('/checkout')}>
            <ShoppingBasketIcon
            className="preheader__optionBasket"
            />
            <span className="preheader__basketCount">{basket?.length}</span>
            </button>
            </div>
            </div>
            <Link to={!user && '/login'}>
            <div onClick={handleAuthentication} className="preheader__option2">
            
                <span className="preheader__optionLineOne">
                    Hi {!user? 'Stranger' : user.email}
                </span>
                <span className="preheader__optionLineTwo">
                  { user? 'Sign Out' : 'Sign In'}
                   
                </span>
            </div>
            </Link>
             </div>
        </div>
    )
}
