import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import DentalCare from '../DentalCare/DentalCare';
import HomeDoctor from '../HomeDoctor/HomeDoctor';
import HomeReview from '../HomeReview/HomeReview';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <DentalCare></DentalCare>
            <HomeReview></HomeReview>
            <AppointmentBanner></AppointmentBanner>
            <HomeDoctor></HomeDoctor>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;