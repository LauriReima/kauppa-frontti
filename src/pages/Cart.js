import userService from '../services/user'

import '../Components/Card/card.css'

const CartPage = ({ users, user, cartContent, allProducts}) => {

    const loggedUser = users.find((u) => u.username === user.username)
    const userId = loggedUser.id
    let history = allProducts.filter(p => loggedUser.cart.includes(p.id));        

    console.log(allProducts, 'all');
    console.log(loggedUser, 'logged')

    const styles = {
        page: {
            height: '10000%',
            padding: '20px',
            display: 'grid',
            gridTemplateColumns: '70% 30%',
            gap: '20px',
            border: '10px'
        },
        card: {
            width: 'auto',
            height: '300px',
            background: 'beige',
            borderRadius: '10px'
        },
        flag: {
            position: 'center',
            opacity: '0.4',
        },
        sidebar: {
            width: '30%',
            height: 'auto',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center'
        },
        list: {
            listStyleType: 'none',
            padding: 0,
        }
    }
    
    const addCartDb = async (userId) => {    
        try{
            let array = []
            cartContent.map(p => (
                array.push(p.id)
            ))
            await userService.addToCart(userId, array)
        } catch (err) {
            console.log(err);
        }
    }
 
        return (
            <div style={styles.page}>
                {cartContent.length > 0 ? 
                <div className='grid'> 
                {cartContent.map((p) => (
                    <div className='cardDiv' style={styles.card} key={p.id}>
                        
                        <h1 style={styles.content}>{p.name}</h1>
                        <h3>{p.price} €</h3>
                        <p>{p.category}</p>
                    
                        {/* <img className='flag' src={image} alt='kuva' style={styles.flag}/> */}
                        <br></br>
                        {/* <button onClick={() => deleteP(id)}>delete from cart</button>  */}
                        {/* <button onClick={() => addToCart(id)}>Add</button> */}
                    </div> 
                ))}
                </div> : 
                <div>
                    <h2>Cart empty</h2>
                    <h3>please add something and rememember to register if you aren't yet!!</h3>
                </div> 
                }
                <div style={styles.sidebar}>
                    <h3>Previously purchased</h3>
                    <button onClick={() => addCartDb(userId)}>Submit</button>
                    <ul style={styles.list}>
                        {history !== undefined ? history.map((p) => (
                            <li key={p.id}>{p.name}</li>
                        )): ''}
                    </ul> 
                </div>
            </div>
        )}
        export default CartPage;

