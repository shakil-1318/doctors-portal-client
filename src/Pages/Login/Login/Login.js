import React, { useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import './Login.css'
import login from '../../../images/login.png' 
import google from '../../../images/google.png'
import facebook from '../../../images/Facebook.png'

import Footer from '../../Shared/Footer/Footer';
import { Link, NavLink } from 'react-router-dom';

const Login = () => {
    const [loginData,setLoginData]=useState({});

    const handleOnBlur=e=>{
        const field=e.target.name;
        const value=e.target.value;
        const newLoginData={...loginData};
        newLoginData[field]=value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit=(e)=>{
        e.preventDefault();
    }
    return (
        <>
        <Navigation></Navigation>
        <div className="login">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                    <div className="login_form">
                    <form onSubmit={handleLoginSubmit}>
                <h3 className='text-center m-3 text-primary'>LOGIN</h3>
                <div className="form-group ">
                    <label className='mb-2'>Email address</label>
                    <input
                    name='email'
                    onBlur={handleOnBlur}
                    type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group ">
                    <label className='mb-2'>Password</label>
                    <input
                    name='password'
                    onBlur={handleOnBlur}
                     type="password" className="form-control" placeholder="Enter password" />
                </div>
                <button type="submit" className=" form-control btn btn-primary">Login</button>
                <button className="form-control google_btn">
                    <img className='img-fluid' src={google} alt="" />
                    <span> Continue with Google</span>
                </button>
                <button className="form-control google_btn">
                    <img className='img-fluid' src={facebook} alt="" />
                    <span> Continue with Facebook</span>
                </button>
            <div className='mt-3 text-center text-decoration-none'>
            <NavLink to='/register'>
            new user please register
            </NavLink>
            </div>
            </form>
                    </div>
                    </div>
                    <div className="col-lg-6">
                        <img className='img-fluid' src={login} alt="" />
                    </div>
                </div>
            </div>
        </div> 
        <Footer></Footer>
        </>
    );
};

export default Login;