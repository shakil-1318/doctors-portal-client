import React from 'react';
import { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    
    return (
        <>
            <Navigation></Navigation>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AvailableAppointment date={date}></AvailableAppointment>
            <Footer></Footer>
        </>
    );
};

export default Appointment;