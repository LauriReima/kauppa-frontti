import React from 'react';

const Search = ({input, handleSearch, handleSelect}) => {
    
    return (
        <div className='searchBar'>
            <input onChange={handleSearch} placeholder='Search'/>
            <select 
                //value={inputCategory} 
                onChange={handleSelect}>
                <option value=''>--select--</option>
                <option value='armor'>Armor</option>
                <option value='melee'>Melee</option>
                <option value='range'>Range</option>
            </select>
        </div>
    );
};

export default Search;