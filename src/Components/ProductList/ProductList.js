import React from 'react';
import Card from '../Card/Card';
import './productList.css'


const ProductList = ({input, order, product, deleteP}) => {
    const filtered = product.filter(p => {
        return p.content.toLowerCase().match(input)
    })
    // const sorter = (alg) => {
    //     if (alg === 'population') {
    //         return filtered.sort((a,b) => a.population < b.population)
    //     }
    //     else if (alg === 'name'){
    //         return filtered.sort((a,b) => a.name.common > b.name.common)     
    //     } 
    // }
    
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
                name={p.content}
                importance={p.important}
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