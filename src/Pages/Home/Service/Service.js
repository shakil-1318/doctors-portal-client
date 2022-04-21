import React from 'react';
import './Service.css'

const Service = (props) => {
    const { name, description, img } = props.service;
    return (
        <>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="service-card text-center">
                    <img className='img-fluid' src={img} alt="" />
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </>
    );
};

export default Service;