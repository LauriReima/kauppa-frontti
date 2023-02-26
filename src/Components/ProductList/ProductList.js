import React from 'react';
import Card from '../Card/Card';
import './productList.css'


const ProductList = ({input, order, product}) => {
    const filtered = product.filter(p => {
        return p.name.common.toLowerCase().match(input)
    })
    const sorter = (alg) => {
        if (alg === 'population') {
            return filtered.sort((a,b) => a.population < b.population)
        }
        else if (alg === 'name'){
            return filtered.sort((a,b) => a.name.common > b.name.common)     
        } 
    }
    if (product.length > 0){
        return (
        <div className='grid'>
            {sorter(order).map((p) => (
            <Card 
                key={p.cca2}
                name={p.name.common}
                capital={p.capital}
                flag={p.flags.png} 
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