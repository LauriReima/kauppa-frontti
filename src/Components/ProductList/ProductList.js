import React from 'react';
import Card from '../Card/Card';
import Search from '../Header/Search/Search'
import './productList.css'


const ProductList = ({searchInput, selectInput,  product, deleteP, handleSearch, user, handleSelect, addToCart, inputColor}) => {
    // filter by name
    const filtered = product.filter(p => {
        let name = p.name.toLowerCase().match(searchInput)
        return name
    })
    // filter the names by category
    const categorize = filtered.filter(c => {
        let category = c.category.match(selectInput)
        return category
    })
       
    if (product.length > 0){
        return (
        <div className='productPage'>
            <Search 
                // input={input}
                handleSearch={handleSearch}
                handleSelect={handleSelect}
                inputColor={inputColor}
                />
            <div className='grid'>
                {
                //sorter(order)
                categorize.map((p) => (
                <Card 
                    key={p.id}
                    id={p.id}
                    name={p.name}
                    price={p.price}
                    category={p.category}
                    image={p.image}
                    deleteP={deleteP}
                    user={user}
                    addToCart={addToCart}
                    //flag={p.flags.png} 
                />
                ))}
            </div>
        </div>
    );
    }else {
        return (
            <h1>loading</h1>
        )
    }
    
};

export default ProductList;