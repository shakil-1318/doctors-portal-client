import React, { useRef, useState } from "react";
import DoctorSwipper from "../DoctorSwipper/DoctorSwipper";
// import "./styles.css";
import './HomeDoctor.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const doctors=[
    {
        id:1,
        img:'https://i.ibb.co/BV0HS7J/doctor-small.png',
        name:'Dr. Saudi',
        phone: '+01 2323111'
    },
    {
        id:2,
        img:'https://i.ibb.co/BV0HS7J/doctor-small.png',
        name:'Dr. Saudi',
        phone: '+01 2323111'
    },
    {
        id:3,
        img:'https://i.ibb.co/BV0HS7J/doctor-small.png',
        name:'Dr. Saudi',
        phone: '+01 2323111'
    },
]

const HomeDoctor = () => {
    return (
        <>
        <section id="testimonials" className="main-testimonials-wrapper">
      <h1 className="text-center">Our Doctor</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 6,
          slideShadows: true,
        }}
        // pagination={true}
      >
        {doctors.map((item) => (
          <SwiperSlide key={item.id}> 
              
            <img className="img-fluid" src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.phone}</p>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
            {/* <div className="doctor">
                <div className="container">
                    <div className="row">
                  {
                      doctors.map(doctor=><DoctorSwipper
                      key={doctor.id}
                        doctor={doctor}
                      ></DoctorSwipper>)
                  }
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default HomeDoctor;