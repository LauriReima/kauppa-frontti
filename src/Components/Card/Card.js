import React from 'react';
import './card.css'

function Card({data}) {


    if (data.length > 0){
        return (
            <>
                {data.map(d => 
                    <div key={d.cca2}
                         className='cardDiv'   
                    >
                        <h1>{d.name.common}</h1>
                        <h3>{d.capital}</h3>
                    </div>)}
            </>
        )
    } else {
        return (<h1>Loading..</h1>)
    }
}

export default Card;