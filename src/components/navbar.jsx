// import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link to="/" className='logoname'>Property.web</Link>
      <div className='nav-links'>
      <Link to="/">Property Feed</Link>
      <Link to="/favorites">Favorites</Link>
      </div>
    </nav>
  );
};

export default Nav;