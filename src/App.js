import './App.css';
import { useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import ProductList from './Components/ProductList/ProductList';
import productService from './services/product';




function App() {
  const [order, setOrder] = useState('name')
  const [searchInput, setSearchInput] = useState('')
  const [product, setProduct] = useState([])
  const [newProduct, setNewProduct] = useState('')
  
  useEffect(() => {  
    productService.getAll()
    .then(res => {
        setProduct(res)
    })
  }, [])
  //console.log(product, 'apppro');
  const handleChange = (e) => {
    e.preventDefault()
    setSearchInput(e.target.value)
  }
  const handleAdd = (e) => {
    e.preventDefault()
    setNewProduct(e.target.value);
    //console.log(e.target.value);
  }
  const addProduct = (e) => {
    e.preventDefault()
    const productObject = {
      content: newProduct,
      important: false,    
    }
    productService.create(productObject).then(pr => {
      setProduct(product.concat(pr))

    })
    setNewProduct('')
  }
  const deleteProduct = (id)  => {
    const newList = product.filter(p => p.id !== id)
    productService.deleteProduct(id).then(
      setProduct(newList)
    )
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
          addInput={handleAdd}
          addProduct={addProduct}
          product={newProduct}
          />
    
    <ProductList 
          input={searchInput}
          order={order}
          product={product}
          deleteP={deleteProduct}
          />
    </>
  );
}

export default App;
