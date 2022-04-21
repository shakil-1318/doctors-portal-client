import React from 'react';
import dental from '../../../images/treatment.png'
import './DentalCare.css'

const DentalCare = () => {
    return (
        <>
            <div className="dental_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img className='img-fluid' src={dental} alt="" />
                        </div>
                        <div className="col-lg-6">
                            <div className="dental_content">
                                <h1>Exceptional Dental Care on Your terms</h1>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet natus ipsam numquam illo maiores atque eum accusamus laborum omnis accusantium quod facere hic consequatur ratione nemo, asperiores nulla tempora explicabo nobis repudiandae quibusdam nostrum! Itaque est dolore iste fuga dolores?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, quidem nostrum temporibus saepe tenetur labore laudantium cum repellendus perspiciatis debitis?</p>
                                <button>Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DentalCare;