import React from 'react';

const AddForm = ({addInput, addProduct, value}) => {
    
    return (
        <div className='bar'>
            <input value={value} onChange={addInput}/>
            <button onClick={addProduct}>lisää</button>
        </div>
    );
};

export default AddForm;