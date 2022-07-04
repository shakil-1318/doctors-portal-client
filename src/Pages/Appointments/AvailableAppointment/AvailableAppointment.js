import React, { useEffect, useState } from 'react';
import Booking from '../Booking/Booking';
import './AvailableAppointment.css'


const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://lit-ocean-74625.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])

    return (
        <>
            <div className="availableappointment">
                <div className="container">
                    {/* 1st row */}
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="appointment_title text-center">
                                <h1>Available Appoinment on <span>{date.toDateString()}</span> </h1>
                            </div>
                        </div>
                    </div>
                    {/* 2nd row */}
                    <div className="row justify-content-center">
                        {
                            services.map(services => <Booking
                                key={services._id}
                                services={services}
                                date={date}

                            ></Booking>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default AvailableAppointment;