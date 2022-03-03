import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import { NavHashLink } from 'react-router-hash-link';
import './Navbar.css'

const Navbar = () => {
    const {user, logOut} = useFirebase();
    return (
        <div className='bg-gray-800 fixed top-0 right-0 left-0 z-10'>
            <div className='mx-10 md:mx-10 lg:mx-14 xl:mx-40 2xl:mx-60'>
                <div className='flex justify-between items-center py-6'>
                    <div>
                        <h2 className='text-white text-4xl font-extrabold'><NavLink to="/home">Food<span className='text-yellow-500 '>Point</span></NavLink></h2>
                    </div>
                    <div className='text-white hidden md:flex justify-between items-center text-base font-semibold'>
                        <div>
                            <ul className='flex'>
                                <li className='pl-5'>
                                    <NavLink to="/home" className='pb-3 hover:border-b-2 hover:text-yellow-500'>Home</NavLink>
                                </li>
                                <li className='pl-5'>
                                    <NavLink to="/about" className='pb-3 hover:border-b-2 hover:text-yellow-500'>About</NavLink>
                                </li>
                                <li className='pl-5'>
                                    <NavHashLink 
                                        to="/home#restaurants"
                                        className='pb-3 hover:border-b-2 hover:text-yellow-500' >Restaurants</NavHashLink>
                                </li>
                                <li className='pl-5'>
                                    <NavLink to="/myOrders" className='pb-3 hover:border-b-2 hover:text-yellow-500'>My orders</NavLink>
                                </li>
                                <li className='pl-5'>
                                    <NavLink className='pb-3 hover:border-b-2 hover:text-yellow-500' to="/home#restaurants">Manage orders</NavLink>
                                </li>
                                <li className='pl-5'>
                                    <NavLink className='pb-3 hover:border-b-2 hover:text-yellow-500' to="/home#restaurants">Add new food</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className='pl-6'>
                            <NavLink to='/login'>
                                {
                                    user.email && <span className='text-gray-50'>hello, {user.displayName}</span>
                                }
                                {
                                    user.email?
                                    <button 
                                    onClick={logOut}
                                    className='py-2 px-6 bg-yellow-600 border text-lg font-bold hover:bg-yellow-800 rounded-lg'
                                    >Logout</button>
                                    :
                                    <button 
                                    className='py-2 px-6 bg-yellow-600 border text-lg font-bold hover:bg-yellow-800 rounded-lg'
                                    >Login</button>
                                }
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;