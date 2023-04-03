import React from 'react';
import './drop.css'

function Dropdown({ toggleDropBox  }) {
    return (
        <div className='drop'>
            <button className='nappi' onClick={toggleDropBox}>sivuvalikko</button>
        </div>
    );
}

export default Dropdown;