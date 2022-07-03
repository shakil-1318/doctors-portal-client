import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert'
import './MakeAdmin.css'

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value)
        e.target.value = '';
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);

                }
            })

        e.preventDefault();
    }
    return (
        <section className='admin-section'>
            <h1 style={{ textAlign: 'center' }}>Make An Admin</h1>
            <form className='admin' onSubmit={handleAdminSubmit}>
                <input className='admin-input' onBlur={handleOnBlur} type="email" name="email" placeholder='Your Email' />
                <button className='admin-btn' type="submit" variant="contained">Make Admin</button>
            </form>
            {
                success && <Alert severity="success">Admin Created successfully!</Alert>
            }
        </section>
    );
};

export default MakeAdmin;