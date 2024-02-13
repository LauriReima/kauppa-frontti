import React from 'react';
import './card.css'

function Card({name, price, category, image, id, deleteP, user, addToCart}) {

    //const important = (!importance) ? "eipä kovinkaan" : "tärkeää"
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
            <>
                <div className='cardDiv' style={styles.card} >
                    
                    <h1 style={styles.content}>{name}</h1>
                    <h3>{price} €</h3>
                    <p>{category}</p>
                    <img className='flag' src={image} alt='kuva' style={styles.flag}/>
                    <br></br>
                    {user !== null && user.username === 'lauri' ? <button onClick={() => deleteP(id)}>delete</button> : ''}
                    <button onClick={() => addToCart(id)}>Add</button>
                </div>
            </>
        )
}

export default Card;