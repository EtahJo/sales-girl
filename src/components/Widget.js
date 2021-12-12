import React from 'react'
import { useNavigate } from 'react-router';
import './widget.css';
import { Link } from 'react-router-dom';


function Widget({id,title,image,text,itemCounts,link}) {
    const navigate = useNavigate();
    
    return (
        <div className="widget">
            <img src={image} alt="" />
            <div className="widget__info">
                <h3>{title}</h3>
                <p>{text}</p>
                <small>{itemCounts}</small>


            </div>
         
          <button onClick={e =>navigate(`${link}`)}>Check Items Out</button>  
       
        </div>
    )
}

export default Widget
