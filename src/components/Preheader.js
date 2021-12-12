import React from 'react';
import './preheader.css';
import { Link } from 'react-router-dom';

export default function Preheader() {
    return (
        <div className='pre__header'>
            <Link to ='/'>
             <h1>Sales Girl</h1>
             </Link>
        </div>
    )
}
