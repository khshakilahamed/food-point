import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='bg-gray-800'>
            <div className='mx-10 md:mx-20 lg:mx-60'>
                <div className='flex justify-between items-center py-6'>
                    <div>
                        <h2 className='text-white text-4xl font-extrabold'><NavLink to="/home">Food<span className='text-yellow-500 '>Point</span></NavLink></h2>
                    </div>
                    <div className='text-white hidden md:flex justify-between items-center text-lg font-semibold'>
                        <div>
                            <ul className='flex'>
                                <li className='pl-5'><NavLink to="/home" className='pb-3 hover:border-b-2 hover:text-yellow-500'>Home</NavLink></li>
                                <li className='pl-5'><NavLink to="/about" className='pb-3 hover:border-b-2 hover:text-yellow-500'>About</NavLink></li>
                                <li className='pl-5'><NavLink className='pb-3 hover:border-b-2 hover:text-yellow-500' to="/home#restaurants">Restaurants</NavLink></li>
                            </ul>
                        </div>
                        <div className='pl-6'>
                            <NavLink to='/login'>
                                <button className='py-2 px-6 bg-yellow-600 border text-lg font-bold hover:bg-yellow-800 rounded-lg'>Login</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;