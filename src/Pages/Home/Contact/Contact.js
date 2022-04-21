import React from 'react';
import { Form } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <>
            <div style={{ "--img": "url('https://i.ibb.co/BrHddZM/appointment-bg.jpg')" }} className="contact">
                <div className="container">
                    {/* 1st row */}
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="contact_title text-center">
                                <h3>Contact Us</h3>
                                <h1>Always Connect With Us</h1>
                            </div>
                        </div>
                    </div>
                    {/* 2nd row */}
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="contact_form">
                                <Form action='#'>
                                    <Form.Group className="mb-3" controlId="formGroupEmail">
                                        <Form.Control type="email" placeholder="Email Address" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formGroupPassword">
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <textarea className="mb-3 form-control" name="" id="" cols="30" rows="5" placeholder='Message'></textarea>
                                    <button>SUBMIT</button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;