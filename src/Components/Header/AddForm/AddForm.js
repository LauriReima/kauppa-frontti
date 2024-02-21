import React from 'react';
import './form.css'

const AddForm = ({handleAddName, inputName, addProduct, handleCategory, inputCategory, handlePrice, inputPrice, inputColor}) => {
    

    return (
        <div className='bar' >
            <form onSubmit={addProduct} className='addForm'>
                <label>
                    <p>Nimi: </p>
                    <input className='inputField' style={{backgroundColor: inputColor}} value={inputName} onChange={handleAddName}/>  
                </label>
                <label>
                    <select className='button-35' style={{maxWidth: '150px'}} value={inputCategory} onChange={handleCategory}>
                        <option  value='none'>Category</option>
                        <option value='armor'>Armor</option>
                        <option value='melee'>Melee</option>
                        <option value='range'>Range</option>
                    </select>  
                </label>
                <label>
                    <p>Hinta:</p>
                    <input className='inputField' style={{backgroundColor: inputColor}} type='number' value={inputPrice} onChange={handlePrice} min='0,1'/>
                </label>
                <button className='button-35' type='submit'>lisää</button>
            </form>
        </div>
    );
};

export default AddForm;