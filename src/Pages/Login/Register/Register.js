import React, { useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import './Register.css'
import Alert from 'react-bootstrap/Alert';

import login from '../../../images/login.png'
import google from '../../../images/google.png'
import facebook from '../../../images/Facebook.png'
import Footer from '../../Shared/Footer/Footer';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Spinner from 'react-bootstrap/Spinner'
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';


const Register = () => {
    const [loginData, setLoginData] = useState({});

    const { user, authError, registerUser, isLoading, signWithGoogle, signInWithFacebook } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(newLoginData);
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if (loginData.password !== loginData.password2) {
            alert('password not match')
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)


        // e.target.field='';
    }
    const handleGoogleLogin = (history) => {
        signWithGoogle(location, history)
    }
    const handleFacebookLogin = (location, history) => {
        signInWithFacebook(location, history)
    }
    return (
        <>
            <Navigation></Navigation>
            <div className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="login_form">
                                <h3 className='text-center m-3 text-primary'>REGISTRATION</h3>
                                {
                                    !isLoading && <form onSubmit={handleLoginSubmit}>

                                        <div className="form-group ">
                                            <label className='mb-2'>Your Name</label>
                                            <input
                                                name='name'
                                                onBlur={handleOnBlur}
                                                type="text" className="form-control" placeholder="Your Name" />
                                        </div>
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
                                        <div className="form-group ">
                                            <label className='mb-2'>Confirm Password</label>
                                            <input
                                                name='password2'
                                                onBlur={handleOnBlur}
                                                type="password" className="form-control" placeholder="Re password" />
                                        </div>
                                        <button type="submit" className=" form-control btn btn-primary">Registration</button>
                                        <div className="d-flex justify-content-around">
                                            <button onClick={handleGoogleLogin} className="google_btn">
                                                <img className='img-fluid' src={google} alt="" />
                                                <span>Google</span>
                                            </button>
                                            <button onClick={handleFacebookLogin} className="google_btn">
                                                <img className='img-fluid' src={facebook} alt="" />
                                                <span>Facebook</span>
                                            </button>
                                        </div>
                                        <div className='mt-3 nav_text text-center text-decoration-none'>
                                            <NavLink to='/login'>
                                                already registerd? please login
                                            </NavLink>
                                        </div>
                                    </form>
                                }
                                {
                                    isLoading && <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <Spinner animation="border" variant="primary" />
                                    </div>
                                }
                                {
                                    user?.email && <Alert variant='success' >
                                        user created successfully
                                    </Alert>
                                }
                                {
                                    authError && <Alert variant="danger" >
                                        {authError}
                                    </Alert>
                                }

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

export default Register;