import React from 'react';
import Search from './Search/Search';
import './header.css'

function Header({input}) {
    return (
        <div className='header'>
            <h1>Hello</h1>
            <Search input={input}/>
        </div>
    );
}

export default Header;