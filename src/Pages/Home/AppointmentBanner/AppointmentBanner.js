import React from 'react';
import './AppointmentBanner.css'
import appointmentBanner from '../../../images/doctor.png'


const AppointmentBanner = () => {
    return (
        <>
            <div style={{ "--img": "url('https://i.ibb.co/BrHddZM/appointment-bg.jpg')" }} className="appointment">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <div className="appointment_img">
                                <img className='img-fluid' src={appointmentBanner} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="appointment_content">
                                <h4>Appointment</h4>
                                <h1>Make an appointment Today</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis nam asperiores illum, nostrum dolore maiores suscipit magnam doloribus at?</p>
                                <button>Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppointmentBanner;