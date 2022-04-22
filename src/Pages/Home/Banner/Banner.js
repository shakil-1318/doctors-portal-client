import React from 'react';
import './Banner.css'
import banner from '../../../images/chair.png'

const Banner = () => {
    return (
        <div>
            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="banner_content">
                                <h1>Your New Smile Starts Here</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum a porro laudantium eum debitis possimus placeat, alias </p>
                                <button>Get Appoinment</button>
                            </div>
                        </div>
                        <div className=" col-lg-8">
                            <img className='img-fluid' src={banner} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* information section  */}
            <div className="inform_section">
                <div className="container">
                    <div className="row justify-content-center">
                        {/* single card */}
                        <div className="col-lg-4">
                            <div className="inform_card  d-flex justify-content-center align-items-center">
                                <div className="inform_icon">
                                    <i class="fa-solid fa-clock"></i>
                                </div>
                                <div className="inform_content">
                                    <h3>Opening Ours</h3>
                                    <p className='m-0'>24 Hours</p>
                                </div>
                            </div>
                        </div>
                        {/* single card */}
                        {/* single card */}
                        <div className="col-lg-4">
                            <div className="inform_card location_card d-flex justify-content-center align-items-center">
                                <div className="inform_icon">
                                    <i class="fa-solid fa-location-dot"></i>
                                </div>
                                <div className="inform_content">
                                    <h3 className='m-0'>Visit Our Location</h3>
                                    <p className='m-0'>Broklyn, NY 1036, United States</p>
                                </div>
                            </div>
                        </div>
                        {/* single card */}
                        {/* single card */}
                        <div className="col-lg-4">
                            <div className="inform_card d-flex justify-content-center align-items-center">
                                <div className="inform_icon">
                                    <i class="fa-solid fa-phone"></i>
                                </div>
                                <div className="inform_content">
                                    <h3 className='m-0'>Contact Us Now</h3>
                                    <p className='m-0'>+000 123 456789</p>
                                </div>
                            </div>
                        </div>
                        {/* single card */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;