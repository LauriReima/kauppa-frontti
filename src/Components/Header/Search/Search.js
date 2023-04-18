import React from 'react';

const Search = ({input, handleSearch}) => {
    
    return (
        <div className='searchBar'>
            <input onChange={handleSearch} placeholder='Search'/>
        </div>
    );
};

export default Search;