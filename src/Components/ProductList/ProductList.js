import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card/Card';

const ProductList = () => {
    const [product, setProduct] = useState([])
    const [count, setCount] = useState(0)

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all").then((res) => {
            setProduct(res.data)
        })
        console.log(product);
    },[])

    return (
        <>
            <Card data={product} />
            {/* <button onClick={()=> setCount(count + 1)}>{count}</button> */}
        </>
    );
};

export default ProductList;