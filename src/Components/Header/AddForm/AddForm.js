import React from 'react';

const AddForm = ({handleAddName, inputName, addProduct, handleCategory, inputCategory}) => {
    

    return (
        <div className='bar' >
            <form onSubmit={addProduct}>
                <input value={inputName} onChange={handleAddName}/>
                <select value={inputCategory} onChange={handleCategory}>
                    <option  value='none'>--pick one--</option>
                    <option value='armor'>Armor</option>
                    <option value='melee'>Melee</option>
                    <option value='range'>Range</option>
                </select>
                <button type='submit'>lisää</button>
            </form>
        </div>
    );
};

export default AddForm;