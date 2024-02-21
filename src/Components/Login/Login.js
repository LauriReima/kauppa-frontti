import React from 'react';

const Login = ({logged, handleUserName, handlePassword, password, user, submit}) => {

    return (
        <>
            <form className='loginInput' onSubmit={submit}>
              
              <input className='inputField' type="text" name="username" placeholder='Enter your username' onChange={handleUserName} value={user}/>
              <input className='inputField' type="password" name="password" placeholder='Enter your password' onChange={handlePassword} value={password}/> 
              <button className='button-35' type='submit' >Login</button>
            </form>
            

        </>
    );
};

export default Login;