import React from 'react';
import { FaFacebook, FaTwitter, FaGooglePlus, FaMapMarkerAlt, FaDoorOpen, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <div className='bg-black text-white'>
            <div className='mx-10 md:mx-20 lg:mx-60'>
                <div className='hidden md:grid grid-cols-3  gap-4 py-10 pt-20'>
                    <div className='flex items-center text-lg text-center'>
                        <p className='hidden xl:flex'>Follow Us: </p>
                        <p className='flex justify-center items-center pl-4'>
                            <a className='px-3 text-xl' href="#"><FaFacebook/></a>
                            <a className='px-3 text-xl' href="#"><FaTwitter/></a>
                            <a className='px-3 text-xl' href="#"><FaGooglePlus/></a>
                        </p>
                    </div>
                    <div className='text-center'>
                        <h2 className='text-white text-4xl font-extrabold'>Food<span className='text-yellow-500 '>Point</span></h2>
                    </div>
                    <div className='flex justify-end items-center'>
                        <input className='w-3/4 bg-transparent border rounded-md p-2' type="email" name="" id="" placeholder='Your Email Address'/>
                    </div>
                </div>
                <hr className='hidden md:flex'/>

                <div className='md:grid grid-cols-3 py-24'>
                    <div className='flex justify-center items-center text-center pb-10 md:pb-0  md:border-r'>
                        <div>
                            <p className='flex justify-center pb-6 text-2xl text-yellow-500'><FaMapMarkerAlt/></p>
                            <h2 className='text-2xl font-semibold pb-3'>Address</h2>
                            <p>Uttara-1208, Dhaka</p>
                            <p>Bangladesh</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center text-center py-10 md:py-0 border-y md:border-y-0 md:border-r'>
                        <div>
                            <p className='flex justify-center pb-6 text-2xl text-yellow-500'><FaDoorOpen/></p>
                            <h2 className='text-2xl font-semibold pb-3 text-yellow-500'>Open Timing</h2>
                            <p>Saturday - Friday</p>
                            <p>8 am - 10 pm</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center text-center pt-10 md:pt-0 '>
                        <div >
                            <p className='flex justify-center pb-6 text-2xl text-yellow-500'><FaPhoneAlt/></p>
                            <h2 className='text-2xl font-semibold pb-3'>Contact Us</h2>
                            <p>Email: food-point@food.com</p>
                            <p><a href="tel:00987564">Tel: 00987564</a></p>
                            <p className='flex md:hidden justify-center items-center pl-4 text-white py-4'>
                                <a className='px-3 text-xl' href="#"><FaFacebook/></a>
                                <a className='px-3 text-xl' href="#"><FaTwitter/></a>
                                <a className='px-3 text-xl' href="#"><FaGooglePlus/></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;