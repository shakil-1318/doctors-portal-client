import React from 'react';
import Booking from '../Booking/Booking';
import './AvailableAppointment.css'


const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        price: 20,
        space: 10,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        price: 15,
        space: 8,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        price: 17,
        space: 9,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        price: 19,
        space: 5,
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 PM - 07.00 PM',
        price: 25,
        space: 10,
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 PM - 08.00 PM',
        price: 35,
        space: 10,
    },
]


const AvailableAppointment = ({date}) => {
    return (
        <>
           <div className="availableappointment">
               <div className="container">
                   {/* 1st row */}
                   <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="appointment_title text-center">
                            <h1>Available Appoinment on {date.toDateString()}</h1>
                            </div>
                        </div>
                   </div>
                   {/* 2nd row */}
                   <div className="row justify-content-center">
                       {
                           bookings.map(booking=><Booking
                           key={booking.id}
                           booking={booking}
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