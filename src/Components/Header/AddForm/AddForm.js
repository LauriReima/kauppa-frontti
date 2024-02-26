import React, { useState } from 'react';
import userService from '../../../services/user'
import TypingEffect from '../../TypingEffect/TypingEffect';
import './form.css'

const AddForm = ({handleAddName, inputName, addProduct, handleCategory, inputCategory, handlePrice, inputPrice, inputColor}) => {
    const [answer, setAnswer] = useState('')
    const [question, setQuestion] = useState('')
    const chatQuestion = (e) => {
        e.preventDefault()
        setQuestion(e.target.value)
    }
    const chatAnswer = async (e) => {   
        e.preventDefault()
        try {
            const answ = await userService.chatGPT(question);
            setAnswer(answ);
            setQuestion('')
        } catch (error) {
            console.error('Error fetching answer:', error);
        }
    }
    console.log(answer);
    return (
        <div className='bar' >
            <form onSubmit={addProduct} className='addForm'>
                <label>
                    <p>Set the name: </p>
                    <input className='inputField' style={{backgroundColor: inputColor}} value={inputName} onChange={handleAddName}/>  
                </label>
                <label>
                    <select className='button-35' style={{maxWidth: '1500px'}} value={inputCategory} onChange={handleCategory}>
                        <option  value='none'>Choose category</option>
                        <option value='armor'>Armor</option>
                        <option value='melee'>Melee</option>
                        <option value='range'>Range</option>
                    </select>  
                </label>
                <label>
                    <p>Set the price:</p>
                    <input className='inputField' style={{backgroundColor: inputColor}} type='number' value={inputPrice} onChange={handlePrice} min='0,1'/>
                </label>
                <button className='button-35' type='submit'>Add the product to cataloque</button>
            </form>
            <form onSubmit={chatAnswer} className='addForm'>
                <label>
                    <p>Ask for an advice: </p>
                    <textarea className='textAreaField' style={{backgroundColor: inputColor}} rows="4" cols="50" value={question} onChange={chatQuestion}/>  
                </label>
                <button className='button-35' type='submit'>Submit question</button>
                <TypingEffect
                    sentence={answer}
                    question={question}
                    inputColor={inputColor}/>
            </form> 
        </div>
    );
};

export default AddForm;