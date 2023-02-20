import React from 'react';

const Search = ({search}) => {
    
    return (
        <div className='bar'>
            <input onChange={search} />
            <button >Search</button>
        </div>
    );
};

export default Search;