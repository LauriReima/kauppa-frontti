import React from 'react';

const Login = ({token, handleUserName, handlePassword, password, user, submit}) => {

    return (
        <>
            { !token ?
            <form className='loginInput' >
              <button type='submit' onClick={submit}>Login</button>
              <input type="text" name="username" placeholder='Enter your username' onChange={handleUserName}/>
              <input type="password" name="password" placeholder='Enter your password' onChange={handlePassword}/> 
            </form>
       :
            <div>
                <p>Logged in</p>
            </div>
    }
        </>
    );
};

export default Login;