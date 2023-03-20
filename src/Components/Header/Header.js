import React from 'react';
import Search from './Search/Search';
import AddForm from './AddForm/AddForm'
import './header.css'

function Header({input, search, addInput, addProduct, product}) {


    return (
        <div className='header'>
            <h1>Hello</h1>
            <Search search={search}/>
            <select name='order' id='order' onChange={input}>Order
                <option value='name'>ABC</option>
                <option value='population'>Population</option>
            </select>
            <AddForm 
                addInput={addInput}
                addProduct={addProduct}
                value={product}
                />
            
        </div>
    );
}

export default Header;