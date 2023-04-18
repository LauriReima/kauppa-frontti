import React from 'react';
import Card from '../Card/Card';
import Search from '../Header/Search/Search'
import './productList.css'


const ProductList = ({input,  product, deleteP, handleSearch}) => {
    const filtered = product.filter(p => {
        return p.name.toLowerCase().match(input)
    })
    const sorted = filtered.map((s) => 
        s.name.toLowerCase()
    )
    
    
    console.log(product.length);
    if (product.length > 0){
        return (
        <>
        <Search 
            input={input}
            handleSearch={handleSearch}
            />
        <div className='grid'>
            {
            //sorter(order)
            filtered.map((p) => (
            <Card 
                key={p.id}
                id={p.id}
                name={p.name}
                price={p.price}
                category={p.category}
                image={p.image}
                deleteP={deleteP}
                //flag={p.flags.png} 
            />
            ))}
        </div>
        </>
    );
    }else {
        return (
            <h1>loading</h1>
        )
    }
    
};

export default ProductList;