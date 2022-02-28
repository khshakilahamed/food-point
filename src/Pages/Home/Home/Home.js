import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import SpecialBurger from '../SpecialBurger/SpecialBurger';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SpecialBurger></SpecialBurger>
            <Contact></Contact>
        </div>
    );
};

export default Home;