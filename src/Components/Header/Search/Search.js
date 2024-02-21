import React from 'react';

const Search = ({inputColor, handleSearch, handleSelect}) => {
    
    return (
        <div className='searchBar'>
            <input style={{backgroundColor: inputColor}} className='inputField' onChange={handleSearch} placeholder='Search'/>
            <select className='button-35' style={{maxWidth: '150px'}}
                onChange={handleSelect}>
                <option value=''>Category</option>
                <option value='armor'>Armor</option>
                <option value='melee'>Melee</option>
                <option value='range'>Range</option>
            </select>
        </div>
    );
};

export default Search;