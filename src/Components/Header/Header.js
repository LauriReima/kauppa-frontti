import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css'


function Header({admin, bgColor, color}) {
    const [dropBox, setDropBox] = useState(false)
    const user = localStorage.getItem('loggedUser') ? JSON.parse(localStorage.getItem('loggedUser')).username : null
    const toggleDrop = () => {
        setDropBox(prev => !prev)
    }
    return (
        <div className='header'>
            <button className='dropbtn' onClick={toggleDrop}>Menu</button>
            <div className='header-links'>
                <Link className='link' to='/'>Home</Link>
                {!user && <Link className='link' to='/login'>Register</Link>}
                {user === 'lauri' && <Link className='link' to='/add'>Add</Link>}
                <Link className='link' to='/cart'>Cart</Link> 
                <select value={color} onChange={bgColor}>
                    <option value='white'>White</option>
                    <option value='grey'>Grey</option>
                    <option value='orange'>Orange</option>
                </select>
            </div>
            <div className='dropdown'>
                <div className={`dropdown-content ${dropBox ? 'show' : ''}`}>
                    <Link className='link' to='/'>Home</Link>
                    {!user && <Link className='link' to='/login'>Register</Link>}
                    {user === 'lauri' && <Link className='link' to='/add'>Add</Link>}
                    <Link className='link' to='/cart'>Cart</Link> 
                    <select value={color} onChange={bgColor}>
                        <option value='white'>White</option>
                        <option value='grey'>Grey</option>
                        <option value='orange'>Orange</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Header;