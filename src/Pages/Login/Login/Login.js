import React, { useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import './Login.css'
import Alert from 'react-bootstrap/Alert';
import login from '../../../images/login.png'
import google from '../../../images/google.png'
import facebook from '../../../images/Facebook.png'
import Spinner from 'react-bootstrap/Spinner'
import Footer from '../../Shared/Footer/Footer';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, authError, loginUser, isLoading, signWithGoogle, signInWithFacebook } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = (e) => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    const handleGoogleLogin = (location, history) => {
        signWithGoogle(location, history);
    }
    const handleFacebookLogin = (location, history) => {
        signInWithFacebook(location, history);
    }
    return (
        <>
            <Navigation></Navigation>
            <div className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="login_form">
                                <h3 className='text-center m-3 text-primary'>LOGIN</h3>
                                {
                                    !isLoading && <form onSubmit={handleLoginSubmit}>

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
                                        <button onClick={handleGoogleLogin} className="form-control google_btn">
                                            <img className='img-fluid' src={google} alt="" />
                                            <span> Continue with Google</span>
                                        </button>
                                        <button onClick={handleFacebookLogin} className="form-control google_btn">
                                            <img className='img-fluid' src={facebook} alt="" />
                                            <span> Continue with Facebook</span>
                                        </button>
                                        <div className='mt-3 text-center text-decoration-none'>
                                            <NavLink to='/register'>
                                                new user? please register
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

export default Login;