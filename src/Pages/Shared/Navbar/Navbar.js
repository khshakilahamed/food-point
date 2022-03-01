import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='bg-gray-800'>
            <div className='mx-10 md:mx-20 lg:mx-60'>
                <div className='flex justify-between items-center py-6'>
                    <div>
                        <h2 className='text-white text-4xl font-extrabold'>Food<span className='text-lime-500 '>Point</span></h2>
                    </div>
                    <div className='text-white hidden md:flex justify-between items-center text-lg font-semibold'>
                        <div>
                            <ul className='flex'>
                                <li className='pl-5'><NavLink to="/home" className='pb-3 hover:border-b-2 hover:text-lime-500'>Home</NavLink></li>
                                <li className='pl-5'><NavLink to="/about" className='pb-3 hover:border-b-2 hover:text-lime-500'>About</NavLink></li>
                                <li className='pl-5'><a className='pb-3 hover:border-b-2 hover:text-lime-500' href="#">Restaurant</a></li>
                            </ul>
                        </div>
                        <div className='pl-6'>
                            <button className='py-2 px-6 bg-lime-600 border text-lg font-semibold hover:bg-lime-800 rounded-lg'>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;