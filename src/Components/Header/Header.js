import React from 'react';
import Search from './Search/Search';
import './header.css'

function Header({input, search}) {


    return (
        <div className='header'>
            <h1>Hello</h1>
            <Search search={search}/>
            <select name='order' id='order' onChange={input}>Order
                <option value='name'>ABC</option>
                <option value='population'>Population</option>
            </select>
        </div>
    );
}

export default Header;