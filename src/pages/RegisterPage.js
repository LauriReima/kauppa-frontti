import React from 'react';

const RegisterPage = ({registerUser, userName, password, handlePW, handleName, inputColor}) => {

    return (
        <>
            <div className='bar'>
                <form className='register'>
                    <label>
                        <p>Username:</p>
                        <input className='inputField' style={{backgroundColor: inputColor}} type="text" value={userName} name="username" placeholder='Enter your username' onChange={handleName}/>
                    </label>
                    <label>
                        <p>Password:</p>
                        <input className='inputField' style={{backgroundColor: inputColor}} type="password" value={password} name="password" placeholder='Enter your password' onChange={handlePW}/>  
                    </label> 
                    <button className='button-35' onClick={registerUser}>Register</button>        
                </form>
            </div>
        </>
    );
};

export default RegisterPage;