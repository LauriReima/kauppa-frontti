import useState from 'react';

import '../Components/Card/card.css'

const CartPage = ({registerUser, userName, password, handlePW, user, cartContent}) => {

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
                    <h1>hello</h1>
                    <button>Submit</button>
                    {/* <ul style={styles.list}>
                        <li key={'1'}><span>hello</span></li>
                        <li key={'2'}><span>hello</span></li>
                        <li key={'3'}><span>hello</span></li>
                    </ul> */}
                </div>
            </div>
        )}
        export default CartPage;

