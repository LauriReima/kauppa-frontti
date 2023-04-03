import React, { useState } from 'react';
import Search from './Search/Search';
import AddForm from './AddForm/AddForm'
import Dropdown from './Dropdown/Dropdown';
import './header.css'
import { Link } from 'react-router-dom';
import NavBar from './NavBar/NavBar';

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
            <NavBar />
        </div>
    );
}

export default Header;