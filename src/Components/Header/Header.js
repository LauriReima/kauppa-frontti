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
                <Link to='/'>
                    <button className='button-35' alt='home'><i class="fa-solid fa-house"></i></button>
                </Link>
                {!user && 
                <Link to='/login'>
                    <button className='button-35'><i class="fa-solid fa-user-plus"></i></button>
                </Link>
                }{
                user === 'lauri' && 
                <Link  to='/add'>
                    <button className='button-35'><i class="fa-solid fa-plus"></i></button>
                </Link>
                }
                <Link  to='/cart'>
                    <button className='button-35'><i class="fa-solid fa-cart-shopping"></i></button> 
                </Link>
                <select className='button-35' style={{maxWidth: '150px'}} value={color} onChange={bgColor}>
                    <option value='#c1dedb'>light</option>
                    <option value='#374543'>dark</option>
                    <option value='orange'>Orange</option>
                </select>
            </div>
            <div className='dropdown'>
                <div className={`dropdown-content ${dropBox ? 'show' : ''}`}>
                    <Link className='link' to='/'>Home</Link>
                    {!user && <Link className='link' to='/login'>Register</Link>}
                    {user === 'lauri' && <Link className='link' to='/add'>Add</Link>}
                    <Link className='link' to='/cart'>Cart</Link> 
                    <select style={{backgroundColor: 'rgb(105, 151, 146)', fontSize: '15px'}} value={color} onChange={bgColor}>
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