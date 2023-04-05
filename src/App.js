import './App.css';
import { useEffect, useState } from 'react';
import {
  Routes,
  BrowserRouter as Router,
  Link,
  Route
} from "react-router-dom";
import ProductList from './Components/ProductList/ProductList';
import productService from './services/product';
import LoginPage from './pages/LoginPage';
import AddProducts from './pages/AddProducts';




function App() {
  const [searchInput, setSearchInput] = useState('')
  const [product, setProduct] = useState([])
  const [newProductName, setNewProductName] = useState('')
  const [newCategory, setNewCategory] = useState('none')
  const [newPrice, setNewPrice] = useState(0)
  const [token, setToken] = useState()
  const [userName, setUserName] = useState()
  const [password, setPassword] = useState()
  
  useEffect(() => {  
    productService.getAll()
    .then(res => {
        setProduct(res)
    })
  }, [])

  const handleChange = (e) => {
    e.preventDefault()
    setSearchInput(e.target.value)
  }
  const handlePrice = (e) => {
    e.preventDefault()
    setNewPrice(e.target.value)
  }
  const handleCategory = (e) => {
    e.preventDefault()
    setNewCategory(e.target.value)
  }
  const handleAddName = (e) => {
    e.preventDefault()
    setNewProductName(e.target.value);
  }
  const handleUserName = (e) => {
    e.preventDefault()
    setUserName(e.target.value);
  } 
  const handlePassword = (e) => {
    e.preventDefault()
    setPassword(e.target.value);
  }
  const addProduct = (e) => {
    e.preventDefault()
    const productObject = {
      name: newProductName,
      price: newPrice,
      category: newCategory    
    }
    if (!productObject.name | productObject.price < 1 | productObject.category === 'none'){
      window.alert('Tarkista lisäys!!')
    } else{
      productService.create(productObject).then(pr => {
      setProduct(product.concat(pr))
    })
    }
    
    setNewProductName('')
    setNewCategory('none')
    setNewPrice(0)
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
      <div className='nav'>
        <Link to='/'>Home</Link>
        <Link to='/login'>Register</Link>
        <Link to='/add'>Add</Link> 
      </div>
      <Routes>
        <Route path='/' element={<ProductList 
          input={searchInput}
          //order={order}
          product={product}
          deleteP={deleteProduct}/>} 
          token={token}
          handleUserName={handleUserName}
          handlePassword={handlePassword}
          />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/add" element={
          <AddProducts 
            addProduct={addProduct} 
            handleAddName={handleAddName} 
            inputName={newProductName}
            handleCategory={handleCategory}
            inputCategory={newCategory}
            handlePrice={handlePrice}
            inputPrice={newPrice}
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
