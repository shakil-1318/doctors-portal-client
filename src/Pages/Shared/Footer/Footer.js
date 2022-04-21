import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row justify-content-center">
                        {/* single item */}
                        <div className="col-lg-3 col-md-6">
                            <div className="footer_content">
                                <p></p> <br />
                                <p>Emergency Dental Care</p>
                                <p>Check Up</p>
                                <p>Tratment of Personal Diseases</p>
                                <p>Tooth Extraction</p>
                                <p>Check Up</p>
                            </div>
                        </div>
                        {/* single item */}
                        {/* single item */}
                        <div className="col-lg-3 col-md-6">
                            <div className="footer_content">
                                <p className='common_style'>Services</p>
                                <p>Oral Health</p>
                                <p>Emergency Dental Care</p>
                                <p>Check Up</p>
                                <p>Tratment of Personal Diseases</p>
                                <p>Tooth Extraction</p>
                                <p>Check Up</p>
                            </div>
                        </div>
                        {/* single item */}
                        {/* single item */}
                        <div className="col-lg-3 col-md-6">
                            <div className="footer_content">
                                <p className='common_style'>Oral Health</p>
                                <p>Emergency Dental Care</p>
                                <p>Check Up</p>
                                <p>Tratment of Personal Diseases</p>
                                <p>Tooth Extraction</p>
                                <p>Check Up</p>
                            </div>
                        </div>
                        {/* single item */}
                        {/* single item */}
                        <div className="col-lg-3 col-md-6">
                            <div className="footer_content">
                                <p className='common_style'>Our Address</p>
                                <p><small>New York-1234, Hudson Yards</small></p>
                                <div className="footer_icon">

                                    <span> <a href="#"><i class="fa-brands fa-facebook"></i></a></span>
                                    <span> <a href="#"><i class="fa-brands fa-google-plus"></i></a></span>
                                    <span> <a href="#"><i class="fa-brands fa-twitter"></i></a></span>

                                </div>
                                <div className="footer_call_btn">
                                    <p><small>Call Now</small></p>
                                    <p className='phone_number'>+2032423184237</p>
                                </div>
                            </div>
                        </div>
                        {/* single item */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;