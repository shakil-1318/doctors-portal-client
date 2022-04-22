import React from 'react';
import chair from '../../../images/chair.png'
import Calendars from '../../Shared/Calendar/Calendars';
import './AppointmentHeader.css'

const AppointmentHeader = ({date,setDate}) => {
    
    return (
        <>
            <div className="appointmentheader m-5">
                <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <Calendars date={date} setDate={setDate}></Calendars>
                    </div>
                    <div className="col-lg-6">
                        <img className='img-fluid' src={chair} alt="" />
                    </div>
                </div>
                </div>
            </div>
        </>
    );
};

export default AppointmentHeader;