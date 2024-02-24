//import '../Components/Card/card.css'

import { useEffect, useState } from "react"

const CartPage = ({ users, user, allProducts, addCartDb, cartContent}) => {
    const [sideVisible, setSideVisible] = useState(false)
    const [disp, setDisp] = useState({
        display: 'none',
        width: '300px',
        height: '500px',
        padding: '10px',
        borderRadius: '10px',
        textAlign: 'center',
        background: 'rgb(105, 151, 146)',
        border: 'solid grey',
        position: 'fixed',
        transition: 'width 3s ease'
    })
    const loggedUser = users.find((u) => u.username === user.username)
    const userId = loggedUser.id
    let last10 = () => {
        let arr = []
        if (loggedUser.cart !== undefined) {
            arr = loggedUser.cart.slice(-6).reverse();
        }
        return arr
    }   

    const emptyCart = () => {
        localStorage.removeItem('cart')
        window.location.reload()
    }
    const openSide = () => {
        setSideVisible(!sideVisible)
        setDisp((prevStyles) => ({
            ...prevStyles,
            display: sideVisible ? 'none' : 'block',
            width: sideVisible ? '0' : '300px', 
            right: '10px',
            top: '70px',
            border: 'solid 1px black'
        }))
    }
    useEffect(() => {
        const updateSidebarVisibility = () => {
          if (window.innerWidth >= 768) {
            setSideVisible(false)
            setDisp({
                ...disp,
                display: 'block',
                position: 'relative',
            }); 
          } else {
            setSideVisible(false)
            setDisp({
                ...disp,
                display: 'none',
                position: 'fixed'}); 
          }
        };
        updateSidebarVisibility();
        window.addEventListener('resize', updateSidebarVisibility);
        return () => {
          window.removeEventListener('resize', updateSidebarVisibility);
        };
      }, []);

    const styles = {
        page: {
            minHeight: 'calc(100vh - 270px)',
            padding: '20px',
            display: 'grid',
            gridTemplateColumns: '70% 30%',
            gap: '20px',
            border: '10px'
        },
        card: {
            textAlign: 'center',
            maxWidth: '200px',
            height: '220px',
            background: 'rgb(105, 151, 146)',
            borderRadius: '10px',
            border: 'solid grey'
        },
        flag: {
            position: 'center',
            opacity: '0.4',
        },
        sidebar: disp,
        list: {
            listStyleType: 'none',
            padding: 0,
            border: 'solid teal',
            borderRadius: '13px'
        },
    }
    const total = cartContent.reduce((sum, prod)=> sum + prod.price,0)
        return (
            <>
            <button className="button-35 hiddenButton" onClick={() => openSide()}><i className="fa-solid fa-arrow-left"></i></button>
            <div style={styles.page}>
                {cartContent.length > 0 ? 
                <div className='grid'> 
                {cartContent.map((p) => (
                    <div className='cardDiv' style={styles.card} key={p.id}>             
                        <h1 style={styles.content}>{p.name}</h1>
                        <h3>{p.price} €</h3>
                        <p>{p.category}</p>
                    </div> 
                ))}
                </div> : 
                <div>
                    <h2>Cart empty</h2>
                    <h3>please add something to the cart!!</h3>
                </div> 
                }
                <div className="sidebar" style={styles.sidebar}>
                    <button 
                        className='button-35' 
                        onClick={() => addCartDb(userId,cartContent)}>
                        Submit
                    </button>
                    <button className='button-35' onClick={() => emptyCart()}><i className="fa-solid fa-trash"></i></button>
                    <p style={{fontSize: '20px', background:'pink', borderRadius: '20px'}}>Total: {total} €</p>
                    <h3>Previously purchased</h3>
                        {last10().map((p) => (
                            <ul style={styles.list} key={p.id}>
                                <li style={{fontSize: '17px', fontWeight: 'bold'}}>{p.name}: {p.price} €</li> 
                                <li>{p.date}</li>
                            </ul> 
                        ))}
                </div>
            </div>
            </>
        )}
        export default CartPage;

