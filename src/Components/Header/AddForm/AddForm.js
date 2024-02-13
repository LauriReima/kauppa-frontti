import React from 'react';
import './form.css'

const AddForm = ({handleAddName, inputName, addProduct, handleCategory, inputCategory, handlePrice, inputPrice}) => {
    

    return (
        <div className='bar' >
            <form onSubmit={addProduct} className='addForm'>
                <label>
                    <p>Nimi: </p>
                    <input value={inputName} onChange={handleAddName}/>  
                </label>
                <label>
                    <select value={inputCategory} onChange={handleCategory}>
                        <option  value='none'>--pick one--</option>
                        <option value='armor'>Armor</option>
                        <option value='melee'>Melee</option>
                        <option value='range'>Range</option>
                    </select>  
                </label>
                <label>
                    <p>Hinta:</p>
                    <input type='number' value={inputPrice} onChange={handlePrice} min='1'/>
                </label>
                <button type='submit'>lisää</button>
            </form>
        </div>
    );
};

export default AddForm;