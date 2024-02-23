//import '../Components/Card/card.css'

const CartPage = ({ users, user, allProducts, addCartDb, cartContent}) => {
    //const [cContent, setCContent] = useState(JSON.parse(localStorage.getItem('cart')) || [])
    const loggedUser = users.find((u) => u.username === user.username)
    const userId = loggedUser.id
    let last10 = () => {
        let arr = []
        if (loggedUser.cart !== undefined) {
            arr = loggedUser.cart.slice(-6).reverse();
        }
        return arr
    }   
    const badgeColor = 'rgb(105, 151, 146)'
    const emptyCart = () => {
        localStorage.removeItem('cart')
        window.location.reload()
    }


    const styles = {
        page: {
            minHeight: '73vh',
            padding: '20px',
            display: 'grid',
            gridTemplateColumns: '70% 30%',
            gap: '20px',
            border: '10px'
        },
        card: {
            textAlign: 'center',
            width: '200px',
            height: '220px',
            background: badgeColor,
            borderRadius: '10px',
            border: 'solid grey'
        },
        flag: {
            position: 'center',
            opacity: '0.4',
        },
        sidebar: {
            width: '280px',
            height: '500px',
            padding: '10px',
            borderRadius: '10px',
            textAlign: 'center',
            background: badgeColor,
            border: 'solid grey'
        },
        list: {
            listStyleType: 'none',
            padding: 0,
            border: 'solid teal',
            borderRadius: '13px'
        }
    }
    const total = cartContent.reduce((sum, prod)=> sum + prod.price,0)
        return (
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
                <div style={styles.sidebar}>
                    <button 
                        className='button-35' 
                        onClick={() => addCartDb(userId,cartContent)}>
                        Submit
                    </button>
                    <button className='button-35' onClick={() => emptyCart()}><i class="fa-solid fa-trash"></i></button>
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
        )}
        export default CartPage;

