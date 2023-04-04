import React from 'react';
import Card from '../Card/Card';
import './productList.css'


const ProductList = ({input, order, product, deleteP}) => {
    const filtered = product.filter(p => {
        return p.name.toLowerCase().match(input)
    })
    
    console.log(product.length);
    if (product.length > 0){
        return (
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
    );
    }else {
        return (
            <h1>loading</h1>
        )
    }
    
};

export default ProductList;