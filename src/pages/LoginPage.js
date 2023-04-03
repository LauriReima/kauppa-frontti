import React from 'react';
import NavBar from '../Components/Header/NavBar/NavBar';

const LoginPage = () => {
    return (
        <>
            <NavBar />
            <div>
                <form>
                    <input type="text" name="username" placeholder='Enter your username' />                
                </form>
            </div>
        </>
    );
};

export default LoginPage;