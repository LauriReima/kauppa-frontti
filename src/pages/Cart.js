import useState from 'react';

import '../Components/Card/card.css'

const CartPage = ({registerUser, userName, password, handlePW, user, cartContent}) => {

    const styles = {
        card: {
            width: 'auto',
            height: '300px',
            background: 'beige',
            borderRadius: '10px'
        },
        flag: {
            position: 'center',
            opacity: '0.4',
        }
    }
    
        return (
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
            </div>
        )}
        export default CartPage;
//     return (
//         <><h1>Cart</h1>
//             <div className='grid'>
//             {  
//             cartContent.map((p) => (
//             <Card 
//                 key={p.id}
//                 id={p.id}
//                 name={p.name}
//                 price={p.price}
//                 category={p.category}
//                 image={p.image}
//                 //deleteP={deleteP}
//                 user={user}
//             />
//             ))}
//         </div>
//         </>
//     );
// };

