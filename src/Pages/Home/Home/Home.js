import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Restaurants from '../Restaurants/Restaurants';
import SpecialBurger from '../SpecialBurger/SpecialBurger';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Restaurants></Restaurants>
            <SpecialBurger></SpecialBurger>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;