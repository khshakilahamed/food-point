import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import './Navbar.css'
import useAuth from '../../../hooks/useAuth';
import MobileNavbar from './MobileNavbar';


const Navbar = () => {
    const {user, logOut} = useAuth();

    return (
        <div className='bg-gray-800 fixed top-0 right-0 left-0 z-10'>
            <div className='mx-10 md:mx-10 lg:mx-14 xl:mx-20 2xl:mx-28'>
                <div className='flex justify-between items-center py-6'>
                    <div>
                        <h2 className='text-white text-4xl font-extrabold'><NavLink to="/home">Food<span className='text-yellow-500 '>Point</span></NavLink></h2>
                    </div>
                    <div className='hidden lg:flex justify-between items-center font-semibold'>
                        <div>
                            <ul className='flex'>
                                <li className='pl-5 text-white lg:text-base xl:text-xl'>
                                    <NavLink to="/home" className='pb-3 hover:border-b-2 hover:text-yellow-500'>Home</NavLink>
                                </li>
                                <li className='pl-5 text-white lg:text-base xl:text-xl'>
                                    <NavLink to="/about" className='pb-3 hover:border-b-2 hover:text-yellow-500'>About</NavLink>
                                </li>
                                <li className='pl-5 text-white lg:text-base xl:text-xl'>
                                    <NavHashLink 
                                        to="/home#restaurants"
                                        className='pb-3 hover:border-b-2 hover:text-yellow-500' >Restaurants</NavHashLink>
                                </li>
                                <li className='pl-5 text-white lg:text-base xl:text-xl'>
                                    <NavLink to="/myOrders" className='pb-3 hover:border-b-2 hover:text-yellow-500'>My orders</NavLink>
                                </li>
                                <li className='pl-5 text-white lg:text-base xl:text-xl'>
                                    <NavLink className='pb-3 hover:border-b-2 hover:text-yellow-500' to="/manageOrders">Manage orders</NavLink>
                                </li>
                                <li className='pl-5 text-white lg:text-base xl:text-xl text-base'>
                                    <NavLink className='pb-3 hover:border-b-2 hover:text-yellow-500' to="/addNewFood">Add new food</NavLink>
                                </li>
                                <li className='pl-4'>
                                {
                                    user.email && <span className='hidden 2xl:flex text-gray-400'>Hello, {user.displayName}</span>
                                }
                                </li>
                            </ul>
                        </div>
                        <div className='pl-2'>
                            <NavLink to='/login'>
                                {
                                    user?.email?
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
                    <div className='lg:hidden'>
                        <MobileNavbar></MobileNavbar>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;