import './App.css';
import { useEffect, useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  BrowserRouter as Router,
  Link,
  Route
} from "react-router-dom";
import Header from './Components/Header/Header';
import ProductList from './Components/ProductList/ProductList';
import productService from './services/product';
import LoginPage from './pages/LoginPage';
import AddProducts from './pages/AddProducts';




function App() {
  const [searchInput, setSearchInput] = useState('')
  const [product, setProduct] = useState([])
  const [newProductName, setNewProductName] = useState('')
  const [newCategory, setNewCategory] = useState('none')
  
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
  const handleCategory = (e) => {
    e.preventDefault()
    setNewCategory(e.target.value)
  }
  const handleAddName = (e) => {
    e.preventDefault()
    setNewProductName(e.target.value);
    //console.log(e.target.value);
  }
  const addProduct = (e) => {
    e.preventDefault()
    const productObject = {
      name: newProductName,
      price: 13,
      category: newCategory    
    }
    productService.create(productObject).then(pr => {
      setProduct(product.concat(pr))

    })
    setNewProductName('')
    setNewCategory('none')
  }
  const deleteProduct = (id)  => {
    const newList = product.filter(p => p.id !== id)
    productService.deleteProduct(id).then(
      setProduct(newList)
    )
  }
  // const changeOrder = (e) => {
  //   //console.log(e.target.value);
  //   setOrder(e.target.value)
  // }
  
  return (
    <>
    <Router>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/add'>Add</Link>
        <button onClick={addProduct} >lisää</button>
      </div>
      <Routes>
        <Route path='/' element={<ProductList 
          input={searchInput}
          //order={order}
          product={product}
          deleteP={deleteProduct}/>} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/add" element={
          <AddProducts 
            addProduct={addProduct} 
            handleAddName={handleAddName} 
            inputName={newProductName}
            handleCategory={handleCategory}
            inputCategory={newCategory}
          />} />
      </Routes>
    </Router>
     {/* <Header 
          //input={changeOrder}
          search={handleChange}
          addInput={handleAdd}
          addProduct={addProduct}
          product={newProduct}
          /> */}
    
    </>
  );
}

export default App;
