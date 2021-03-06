import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import './About.css'

const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='mx-10 md:mx-10 lg:mx-14 xl:mx-20 2xl:mx-28'>
                <div className='about_container h-screen flex justify-center items-center pt-24'>
                    {/* <h2>This is About page.</h2> */}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;