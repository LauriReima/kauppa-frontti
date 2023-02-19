import './App.css';
import Header from './Components/Header/Header';
import ProductList from './Components/ProductList/ProductList';



function App() {

  const handleChange = (e) => {
    e.preventDefault()
    console.log(e.target.value);
    return e.target.value
  }
  return (
    <>
    <Header input={handleChange}/>
    <ProductList input={handleChange}/>
    </>
  );
}

export default App;
