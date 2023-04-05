import React from 'react';
import AddForm from '../Components/Header/AddForm/AddForm';


const AddProducts = ({addProduct, handleAddName, inputName,handleCategory, inputCategory, handlePrice, inputPrice}) => {
    return (
        <div className='addForm'>
            
            <AddForm 
                addProduct={addProduct}
                handleAddName={handleAddName} 
                inputName={inputName}   
                handleCategory={handleCategory}
                inputCategory={inputCategory}
                handlePrice={handlePrice}
                inputPrice={inputPrice}
            />
        </div>
    );
};

export default AddProducts;