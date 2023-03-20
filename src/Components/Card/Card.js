import React from 'react';
import './card.css'

function Card({name, importance, flag, id, deleteP}) {

    const important = (!importance) ? "eipä kovinkaan" : "tärkeää"
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
                {/* {data.map(d => 
                    <div key={d.cca2}
                         className='cardDiv'>
                        <h1>{d.name.common}</h1>
                        <h3>{d.capital}</h3>
                        <img className='flag' src={d.flag}/>
                    </div>)} */}
                <div className='cardDiv' style={styles.card}>
                    
                    <h1 style={styles.content}>{name}</h1>
                    <h3>{important}</h3>
                    <img className='flag' src={flag} alt='flag' style={styles.flag}/>
                    <br></br>
                    <button onClick={() => deleteP(id)}>delete</button>
                </div>
            </>
        )
}

export default Card;