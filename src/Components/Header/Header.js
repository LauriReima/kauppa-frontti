import React, { useState } from 'react';
import Search from './Search/Search';
import Dropdown from './Dropdown/Dropdown';
import './header.css'


function Header({input, search, addInput, addProduct, product}) {
    const [dropBox, setDropBox] = useState(false)

    const toggleDrop = () => {
        setDropBox(prev => !prev)
    }
    return (
        <div className='header'>
           
            <button onClick={() => toggleDrop()}>sivuvalikko</button>
            {dropBox ? 
            <Dropdown toggleDropBox={toggleDrop}/> 
            : ''}
            <Search search={search}/>
            <select name='order' id='order' onChange={input}>Order
                <option value='name'>ABC</option>
                <option value='population'>Population</option>
            </select>
            {/* <AddForm 
                addInput={addInput}
                addProduct={addProduct}
                value={product}
                /> */}
        </div>
    );
}

export default Header;