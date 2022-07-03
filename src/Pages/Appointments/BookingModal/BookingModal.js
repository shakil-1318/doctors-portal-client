import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Booking from '../Booking/Booking';
import Form from 'react-bootstrap/Form'
import './BookingModal.css'
import useAuth from '../../../hooks/useAuth';

const BookingModal = (props) => {
  const { time, name } = props.services;
  console.log(props.services);
  const { onHide } = props;
  const { user } = useAuth();
  const initialInfo = { patientName: user.displayName, email: user.email, phone: '' }
  const [bookingInfo, setBookingInfo] = useState(initialInfo);

  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    setBookingInfo(newInfo);
  }


  const handleOnSubmit = (e) => {
    // collect data
    const date = props.date.toLocaleDateString();
    const status = 'pending';
    const appointment = {
      ...bookingInfo,
      time,
      name,
      date,
      status
    }
    console.log(appointment);

    // send server
    fetch("http://localhost:5000/appointments", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(appointment)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          alert("booking successfullt");
          onHide();
        }
      })

    e.preventDefault();
  }

  return (
    <>
      <Modal
        className='p-5'
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="container">
          <h3 style={{ textAlign: 'center', color: 'aqua' }}>{name}</h3>
          <div className="row">
            <form onSubmit={handleOnSubmit}>
              <Form.Control readOnly className='m-2' defaultValue={time} />
              <Form.Control className='m-2' onBlur={handleOnBlur} name="patientName" type="text" defaultValue={user?.displayName} />
              <Form.Control className='m-2' onBlur={handleOnBlur} name="phone" placeholder='Your Phone' />
              <Form.Control className='m-2' onBlur={handleOnBlur} name='email' defaultValue={user?.email} />
              <Form.Control readOnly className='m-2' defaultValue={props.date.toDateString()} />
              <button >SEND</button>
            </form>
          </div>
        </div>

        {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default BookingModal;