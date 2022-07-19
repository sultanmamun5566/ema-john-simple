import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUseingGoogle } = useAuth();
   

    return (
        <div className='login-form'>
        <div>
            <h2>Login</h2>
            <form>
                <input type="email" name="" id="" placeholder='Your Email' />
                <br />
                <input type="password" name="" id="" placeholder='Your Password' />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p>new to wma-john? <Link to='/register'>Create new Account</Link> </p>
            <div>--------or-------</div>
                <button
                    className='btn-regular'
                    onClick={signInUseingGoogle}
                >Google Sign In</button>
        </div>
    </div>
    );
};

export default Login;