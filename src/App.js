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
import userService from './services/user'
import RegisterPage from './pages/RegisterPage';
import AddProducts from './pages/AddProducts';
import Login from './Components/Login/Login';




function App() {
  const [searchInput, setSearchInput] = useState('')
  const [product, setProduct] = useState([])
  const [newProductName, setNewProductName] = useState('')
  const [newCategory, setNewCategory] = useState('none')
  const [newPrice, setNewPrice] = useState(0)
  const [token, setToken] = useState()
  const [users, setUsers] = useState([])
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [registerName, setRegisterName] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')

  useEffect(() => {  
    productService.getAll()
    .then(res => {
        setProduct(res)
    })
  }, [])

  const handleSearchChange = (e) => {
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
  const handleRegisterName = (e) => {
    e.preventDefault()
    setRegisterName(e.target.value);
  } 
  const handleRegisterPassword = (e) => {
    e.preventDefault()
    setRegisterPassword(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem(userName, password)
    setUserName('')
    setPassword('')
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
  const registerUser = (e) => {
    e.preventDefault()
    const userObject = {
      username: registerName,
      password: registerPassword
    }
    if (userObject.username === '' | userObject.password === ''){
      window.alert('Täytä molemmat inputit')
    } else {
      userService.create(userObject).then(u => {
        setUsers(users.concat(u))
      })
    }
    setRegisterName('')
    setRegisterPassword('')
  }

  // const changeOrder = (e) => {
  //   //console.log(e.target.value);
  //   setOrder(e.target.value)
  // }

  return (
    <>
    <Router>
      <div className='nav'>
        <div className='links'>
          <Link className='link' to='/'>Home</Link>
          <Link className='link' to='/login'>Register</Link>
          <Link className='link' to='/add'>Add</Link> 
        </div>
          
           <Login 
            token={token}
            handleUserName={handleUserName}
            user={userName}
            handlePassword={handlePassword}
            password={password}
            submit={handleSubmit}
            /> 
         
      </div>
      <Routes>
        <Route path='/' element={<ProductList 
          input={searchInput}
          handleSearch={handleSearchChange}
          product={product}
          deleteP={deleteProduct}/>} 
          />

        <Route path="/login" element={<RegisterPage 
          registerUser={registerUser}
          userName={registerName}
          password={registerPassword}
          handlePW={handleRegisterPassword}
          handleName={handleRegisterName}
        />} />
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
