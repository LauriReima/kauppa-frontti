import React from 'react';
import AddForm from '../Components/Header/AddForm/AddForm';


const AddProducts = ({addProduct, handleAddName, inputName,handleCategory, inputCategory, handlePrice, inputPrice, inputColor}) => {
    return (
        <>
            
            <AddForm 
                addProduct={addProduct}
                handleAddName={handleAddName} 
                inputName={inputName}   
                handleCategory={handleCategory}
                inputCategory={inputCategory}
                handlePrice={handlePrice}
                inputPrice={inputPrice}
                inputColor={inputColor}
            />
        </>
    );
};

export default AddProducts;