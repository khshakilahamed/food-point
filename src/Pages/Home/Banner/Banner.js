import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner_container pt-16'>
            <div className='mx-10 md:mx-10 lg:mx-14 xl:mx-40 2xl:mx-60'>
                <div className='flex justify-start items-center h-screen'>
                    <div className='w-full md:w-2/4 text-white text-center md:text-left '>
                        <h1 className=' text-2xl md:text-4xl lg:text-5xl xl:text-7xl leading-10 font-bold'>Order Healthy And Fresh Food With Fastest Delivery</h1>
                        <button className='bg-yellow-500 py-4 px-10 my-6 md:text-xl md:font-semibold rounded-full'><NavHashLink to="/home#foods">Explore Food</NavHashLink></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;