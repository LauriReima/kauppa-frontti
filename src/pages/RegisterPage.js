import React from 'react';

const RegisterPage = ({registerUser, userName, password, handlePW, handleName}) => {

    return (
        <>
            <div className='bar'>
                <form className='register'>
                    <label>
                        <p>Username:</p>
                        <input type="text" value={userName} name="username" placeholder='Enter your username' onChange={handleName}/>
                    </label>
                    <label>
                        <p>Password:</p>
                        <input type="password" value={password} name="password" placeholder='Enter your password' onChange={handlePW}/>  
                    </label> 
                    <button onClick={registerUser}>Register</button>        
                </form>
            </div>
        </>
    );
};

export default RegisterPage;