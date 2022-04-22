import React from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calendars = ({date,setDate}) => {

    const onChange = (date) => {
        setDate(date);
        console.log(date.toDateString());
    }
   
    return (
        <>
              <Calendar onChange={onChange} value={date} />
        </>
    );
};

export default Calendars;