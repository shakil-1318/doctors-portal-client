import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Booking from '../Booking/Booking';
import Form from 'react-bootstrap/Form'
import './BookingModal.css'

const BookingModal = (props) => {

    const handleOnSubmit=(e)=>{
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
            <h3 style={{textAlign:'center', color:'aqua'}}>{props.booking.name}</h3>
            <div className="row">
            <form onSubmit={handleOnSubmit}>
            <Form.Control readOnly className='m-2' defaultValue={props.booking.time} />
            <Form.Control className='m-2' defaultValue='Phone Name' />
            <Form.Control className='m-2' type="email" placeholder='Your Email' />
            <Form.Control className='m-2' defaultValue='Phone Number' />
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