import React from 'react';
import './AddAppointment.css'
import axios from 'axios';
import { useForm } from "react-hook-form";


const AddAppointment = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://lit-ocean-74625.herokuapp.com/addappointment', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Successfully Product addedded')
                    reset();
                }
            })
    }
    return (
        <section>
            <div className="container">
                <div className="row">
                    <h1 style={{ textAlign: 'center' }}>Add Appointment</h1>
                    <form className='add-appointment-form' onSubmit={handleSubmit(onSubmit)}>
                        <input
                            className='inputItem'
                            placeholder='Appointment Name'
                            {...register("serviceName", { required: true })}
                        />
                        <textarea
                            className='inputItem'
                            placeholder='Appointment Time'
                            {...register("time")}
                        />
                        <input
                            className='inputItem'
                            placeholder='Space'
                            type="number" {...register("space")}
                        />

                        <input className='inputItem add-btn' type="submit" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddAppointment;