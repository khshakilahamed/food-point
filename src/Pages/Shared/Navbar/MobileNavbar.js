import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import { FaBars } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";

const MobileNavbar = () => {
    const [active, setActive] = useState(false);
    const {user, logOut} = useAuth();

    const showMenu = () => {
        setActive(!active)
    }

    return (
        <div>
            <div className=' justify-between items-center font-semibold'>
                     <div className={active ? ' hidden' : 'flex'}>
                        <FaBars className='text-white' onClick={showMenu}/>
                     </div>
                        
                        {
                            active && <div>
                                <div className='text-right'>
                                    <ul className='lg:flex space-y-3'>
                                        <div className='text-white flex justify-end'>
                                            <FaRegWindowClose className='text-2xl' onClick={showMenu}/>
                                        </div>
                                        <li className='pl-5 text-white md:text-xl'>
                                            <NavLink to="/home" className='pb-3 hover:border-b-2 hover:text-yellow-500'>Home</NavLink>
                                        </li>
                                        <li className='pl-5 text-white md:text-xl'>
                                            <NavLink to="/about" className='pb-3 hover:border-b-2 hover:text-yellow-500'>About</NavLink>
                                        </li>
                                        <li className='pl-5 text-white md:text-xl'>
                                            <NavHashLink 
                                                to="/home#restaurants"
                                                className='pb-3 hover:border-b-2 hover:text-yellow-500' >Restaurants</NavHashLink>
                                        </li>
                                        <li className='pl-5 text-white md:text-xl'>
                                            <NavLink to="/myOrders" className='pb-3 hover:border-b-2 hover:text-yellow-500'>My orders</NavLink>
                                        </li>
                                        <li className='pl-5 text-white md:text-xl'>
                                            <NavLink className='pb-3 hover:border-b-2 hover:text-yellow-500' to="/manageOrders">Manage orders</NavLink>
                                        </li>
                                        <li className='pl-5 text-white text-base'>
                                            <NavLink className='pb-3 hover:border-b-2 hover:text-yellow-500' to="/addNewFood">Add new food</NavLink>
                                        </li>
                                        <li className='pl-4'>
                                        {
                                            user.email && <span className=' 2xl:flex text-gray-400'>Hello, {user.displayName}</span>
                                        }
                                        </li>
                                    </ul>
                                </div>
                                <div className='pl-2 text-right'>
                                    <NavLink to='/login'>
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
                        }
                    </div>
        </div>
    );
};

export default MobileNavbar;