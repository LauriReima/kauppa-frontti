import React from 'react';
import Card from '../Card/Card';
import './productList.css'
import useProduct from '../../hooks/useProduct';

const ProductList = ({input}) => {
    const product = useProduct(input)
    const Sorter = (alg) => {
        if (alg === 'pop') {
            const popu = product.sort((a,b) => a.population < b.population)
            return popu
        }
    }
    
    
     const alphabet = product.sort((a,b) => a.name.common > b.name.common)
    // const neg = product.sort((a,b) => a.name.common < b.name.common)
   // console.log(popu.map(p => p.name.common), 'popu');
    if (product.length > 0){
        return (
        <div className='grid'>
            {alphabet.map((p) => (
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