import React from 'react';

const LoginPage = () => {

    return (
        <>
            <div>
                <form>
                    <label>
                        <p>Username:</p>
                        <input type="text" name="username" placeholder='Enter your username' />
                    </label>
                    <label>
                        <p>Password:</p>
                        <input type="text" name="password" placeholder='Enter your password' />  
                    </label> 
                    <button type='submit'>Submit</button>        
                </form>
            </div>
        </>
    );
};

export default LoginPage;