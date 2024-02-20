import './App.css';
import { useEffect, useState } from 'react';
import {
  Routes,
  BrowserRouter as Router,
  Link,
  Route,
  Navigate,
} from "react-router-dom";
import ProductList from './Components/ProductList/ProductList';
import productService from './services/product';
import userService from './services/user'
import loginService from './services/login'
import RegisterPage from './pages/RegisterPage';
import AddProducts from './pages/AddProducts';
import Login from './Components/Login/Login';
import CartPage from './pages/Cart';
import user from './services/user';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'




function App() {
  const [searchInput, setSearchInput] = useState('')
  const [selectInput, setSelectInput] = useState('')
  const [product, setProduct] = useState([])
  const [newProductName, setNewProductName] = useState('')
  const [newCategory, setNewCategory] = useState('none')
  const [newPrice, setNewPrice] = useState(0)
  const [cartContent, setCartContent] = useState([])
  const [users, setUsers] = useState([])
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [registerName, setRegisterName] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [loggedUser, setLoggedUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [admin, setAdmin] = useState(false)
  const [color, setColor] = useState(localStorage.getItem('color') || 'white')

  useEffect(() => {  
    productService.getAll()
    .then(res => {
        setProduct(res.data)
    })
    userService.getAll()
    .then(res => {
      setUsers(res)
    })
  }, [])

  useEffect(() => {
    const loggedUserJSON = localStorage.getItem('loggedUser')
    const storedCart = localStorage.getItem('cart');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setLoggedUser(user)   
      if (user.username === 'lauri') {
        setAdmin(true)
      }
    }
    if (storedCart) {
      setCartContent(JSON.parse(storedCart));
    }
  }, [])
  const handleSelectChange = (e) => {
    e.preventDefault()
    setSelectInput(e.target.value)
  }
  const handleSearchChange = (e) => {
    e.preventDefault()
    setSearchInput(e.target.value)
  }
  const handleAddCart = async (id) => {
    try {
      const item = await productService.getById(id)    
      setCartContent((prevCart) => {
        const updatedCart = [...prevCart, item]
        localStorage.setItem('cart', JSON.stringify(updatedCart))
        return updatedCart
      })     
  }
    catch (err) {
      console.log(err)
    }
  }
  const addCartDb = async (userId,cContent) => {    
    try{
        let array = []
        cContent.map((p) => (
            array.push(p)
        ))
        console.log(array,'array');
        await userService.addToCart(userId, array)
        localStorage.removeItem('cart')
        setCartContent([])
        window.location.reload()
    } catch (err) {
        console.log(err);
    }
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
  const addProduct = (e) => {
    e.preventDefault()
    const productObject = {
      name: newProductName,
      price: newPrice,
      category: newCategory    
    }
    if (!productObject.name | productObject.price < 0.1 | productObject.category === 'none'){
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
    
    if (userObject.username === '' || userObject.password === ''){
      window.alert('Täytä molemmat inputit')
    }
    else if (users.some(u => u.username === userObject.username)){
      window.alert('Käyttäjänimi varattu')
    }  
    else if(userObject.password.length < 4) {
      window.alert('Salasana liian heikko')
    }
    else {
      userService.create(userObject).then(u => {
        setUsers(users.concat(u))
        setRegisterName('')
        setRegisterPassword('')
      })
    }
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password
      })
      localStorage.setItem(
        'loggedUser', JSON.stringify(user)
      )
      setLoggedUser(user)
      setUserName('')
      setPassword('')
      if (user.username === 'lauri') {
        setAdmin(true)
      }   
    } catch (exeption) {
      setErrorMessage('wrong credentials')
      setUserName('')
      setPassword('')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }
  const handleLogout =  (e) => {
    e.preventDefault()
    setLoggedUser(null)
    setAdmin(false)
    localStorage.clear()
    setCartContent([])
  }
  const handleBackgroundColor = (e) => {
    e.preventDefault()
    setColor(e.target.value)
    localStorage.setItem('color', e.target.value)
    console.log(JSON.parse(localStorage.getItem('cart')));
  }

  return (
    <div style={{height: '100%',backgroundColor: color}}>
    <Router>
      <div className='nav'>
          <Header 
              admin={admin} 
              loggedUser={loggedUser}
              bgColor={handleBackgroundColor}
              color={color}
          />     
          {!loggedUser ?
           <Login 
            handleUserName={handleUserName}
            user={username}
            handlePassword={handlePassword}
            password={password}
            submit={handleLogin}
            /> : 
            <div>
              <p>{loggedUser.username} logged in</p>
              <button onClick={handleLogout}>Log Out</button>
            </div>
          }
          </div>
      {errorMessage ?
        <div style={{display: 'flex',alignItems: 'center', justifyContent: 'center', backgroundColor: 'pink' }}>
          <h1 style={{color: 'red' }}>{errorMessage}</h1>
        </div> :
        null
      }
      <Routes>
        <Route path='/' element={<ProductList 
          searchInput={searchInput}
          selectInput={selectInput}
          handleSearch={handleSearchChange}
          handleSelect={handleSelectChange}
          product={product}
          deleteP={deleteProduct}
          user={loggedUser}
          addToCart={handleAddCart}
          />} 
          />
        <Route path="/cart" element={
        loggedUser ? (
        <CartPage 
          users={users}
          user={loggedUser}
          allProducts={product}
          cartContent={cartContent}
          addCartDb={addCartDb}
        />
        ): (
          <Navigate to="/" />
        )
        } 
        />
        <Route path="/login" element={<RegisterPage 
          registerUser={registerUser}
          userName={registerName}
          password={registerPassword}
          handlePW={handleRegisterPassword}
          handleName={handleRegisterName}
        />} />
        <Route path="/add" element={
          admin ? (
          <AddProducts 
            addProduct={addProduct} 
            handleAddName={handleAddName} 
            inputName={newProductName}
            handleCategory={handleCategory}
            inputCategory={newCategory}
            handlePrice={handlePrice}
            inputPrice={newPrice}
          />
          ) : (
            <Navigate to="/" />
          )
        } 
        />
      </Routes>
    </Router>    
    <Footer />
    </div>
  );
}

export default App;
