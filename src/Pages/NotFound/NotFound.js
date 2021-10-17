import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/404.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <img src={notfound} alt="" />
            <Link to="/home">
              <button >Go Back</button>            
            </Link>
        </div>
    );
};

export default NotFound;