import React from 'react';

const Login = ({inputColor, handleUserName, handlePassword, password, user, submit}) => {
    console.log(inputColor);
    return (
        <>
            <form className='loginInput' onSubmit={submit}>
              
              <input className='inputField' style={{backgroundColor: inputColor}} type="text" name="username" placeholder='Enter your username' onChange={handleUserName} value={user}/>
              <input className='inputField' style={{backgroundColor: inputColor}} type="password" name="password" placeholder='Enter your password' onChange={handlePassword} value={password}/> 
              <button className='button-35' type='submit' ><i class="fa-solid fa-right-to-bracket"></i></button>
            </form>
            

        </>
    );
};

export default Login;