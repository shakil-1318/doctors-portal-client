import React from 'react';

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
               </div>
           </div>
        </>
    );
};

export default AvailableAppointment;