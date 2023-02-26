import React from 'react';

const Search = ({search}) => {
    
    return (
        <div className='bar'>
            <input onChange={search} />
        </div>
    );
};

export default Search;