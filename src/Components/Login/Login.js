import React from 'react';

const Login = ({logged, handleUserName, handlePassword, password, user, submit}) => {

    return (
        <>
            <form className='loginInput' onSubmit={submit}>
              
              <input type="text" name="username" placeholder='Enter your username' onChange={handleUserName} value={user}/>
              <input type="password" name="password" placeholder='Enter your password' onChange={handlePassword} value={password}/> 
              <button type='submit' >Login</button>
            </form>
            

        </>
    );
};

export default Login;