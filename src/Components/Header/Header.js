import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css'


function Header({admin}) {
    const [dropBox, setDropBox] = useState(false)

    const toggleDrop = () => {
        setDropBox(prev => !prev)
    }
    return (
        <div className='header'>
            <button className='dropbtn' onClick={toggleDrop}>Menu</button>
            <div className='header-links'>
                <Link className='link' to='/'>Home</Link>
                {!admin ?
                <Link className='link' to='/login'>Register</Link> :
                <Link className='link' to='/add'>Add</Link>   
                }
                <Link className='link' to='/cart'>Cart</Link> 
            </div>
            <div className='dropdown'>
                <div className={`dropdown-content ${dropBox ? 'show' : ''}`}>
                    <Link className='link' to='/'>Home</Link>
                    {!admin ?
                    <Link className='link' to='/login'>Register</Link> :
                    <Link className='link' to='/add'>Add</Link>   
                    }
                    <Link className='link' to='/cart'>Cart</Link> 
                </div>
            </div>
        </div>
    );
}

export default Header;