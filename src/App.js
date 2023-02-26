import './App.css';
import { useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import ProductList from './Components/ProductList/ProductList';
import axios from 'axios';
import getAll from './services/product';



function App() {
  const [order, setOrder] = useState('name')
  const [searchInput, setSearchInput] = useState('')
  const [product, setProduct] = useState([])

  useEffect(() => {
    //axios.get('https://restcountries.com/v3.1/all')
    getAll()
    .then(res => {
        setProduct(res)
    })
  }, [])
  console.log(product, 'pro');
  const handleChange = (e) => {
    e.preventDefault()
    setSearchInput(e.target.value)
  }
  const changeOrder = (e) => {
    //console.log(e.target.value);
    setOrder(e.target.value)
    
}
  return (
    <>
    <Header 
          input={changeOrder}
          search={handleChange}
          />
    <ProductList 
          input={searchInput}
          order={order}
          product={product}
          />
    </>
  );
}

export default App;
