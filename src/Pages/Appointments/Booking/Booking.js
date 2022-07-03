import React from 'react';
import BookingModal from '../BookingModal/BookingModal';
import Button from 'react-bootstrap/Button'
import './Booking.css'


const Booking = ({ services, date }) => {
    const { name, time, price, space } = services;
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="booking-card card text-center">
                    <h2>{name}</h2>
                    <h5>{time}</h5>
                    <p>{space} SPACES AVAILABLE</p>
                    <Button onClick={() => setModalShow(true)}>
                        BOOK APPOINTMENT
                    </Button>
                </div>
            </div>

            <BookingModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                services={services}
                date={date}

            ></BookingModal>
        </>
    );
};

export default Booking;