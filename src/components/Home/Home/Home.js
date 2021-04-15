import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import ThemeFuture from '../ThemeFuture/ThemeFuture';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <ThemeFuture></ThemeFuture>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;