import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://lit-ocean-74625.herokuapp.com/review', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Successfully review addedded')
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
                            placeholder='Image-Link'
                            {...register("img", { required: true })}
                        />
                        <textarea
                            className='inputItem'
                            placeholder='Your Description'
                            {...register("review")}
                        />

                        <input className='inputItem add-btn' type="submit" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Review;