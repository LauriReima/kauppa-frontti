import React from 'react';

const Search = ({input}) => {
    
    return (
        <div className='bar'>
            <input onChange={input} />
            <button>Search</button>
        </div>
    );
};

export default Search;