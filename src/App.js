import './App.css';
import { useState } from 'react';
import Header from './Components/Header/Header';
import ProductList from './Components/ProductList/ProductList';



function App() {
  const [order, setOrder] = useState('name')
  const [searchInput, setSearchInput] = useState('')

  //console.log(searchInput);
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
          
          />
    </>
  );
}

export default App;
