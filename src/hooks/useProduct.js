import React, {useEffect, useState} from 'react';
import axios from 'axios';


function useProduct(keyword) {
    const [product, setProduct] = useState([])

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all").then((res) => {
            setProduct(res.data)
        })    
    },[])    
    // let filtData = product.find(p => {
    //     return (
    //         p.name.common.toLowerCase().search(keyword.toLowerCase()) 
    //     )
    // })
    
    return product
}

export default useProduct;