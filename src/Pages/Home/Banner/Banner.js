import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner_container'>
            <div className='mx-10 md:mx-20 lg:mx-60'>
                <div className='flex justify-start items-center h-screen'>
                    <div className='w-full md:w-2/4 text-white text-center md:text-left '>
                        <h1 className=' text-2xl md:text-4xl lg:text-5xl xl:text-7xl leading-10 font-bold'>Order Healthy And Fresh Food With Fastest Delivery</h1>
                        <button className='bg-yellow-500 py-4 px-10 my-6 md:text-xl md:font-semibold rounded-full'>Explore Food</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;