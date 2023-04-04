import React from 'react';
import AddForm from '../Components/Header/AddForm/AddForm';
import NavBar from '../Components/Header/NavBar/NavBar';


const AddProducts = ({addProduct, handleAddName, inputName,handleCategory, inputCategory}) => {
    return (
        <div>
            <NavBar />
            <AddForm 
                addProduct={addProduct}
                handleAddName={handleAddName} 
                inputName={inputName}   
                handleCategory={handleCategory}
                inputCategory={inputCategory}
            />
        </div>
    );
};

export default AddProducts;