import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

const NavBar = () => {
    return (
        <div className='nav'>
            <Link to='/' >Home</Link>
            <Link to='/login' >Login</Link>
            <Link to='/form' >Add Products</Link>
        </div>
    );
};

export default NavBar;