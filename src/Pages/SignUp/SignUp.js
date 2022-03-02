import React from 'react';
import Contact from '../Home/Contact/Contact';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import googleIcon from '../../images/google.png'
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const SignUp = () => {
    const {user, signInUsingGoogle} = useFirebase();
    return (
        <div>
            <Navbar></Navbar>
            <div className='mx-10 md:mx-20 lg:mx-44 xl:mx-60'>
                <h2 className='text-center text-7xl font-thin py-10'>Sign Up</h2>
                <div className='md:flex my-20'>
                    <div className='md:border-r-2 md:w-1/2  md:pr-16 lg:pr-24 pb-10 md:pb-0 '>
                        <form className='flex flex-col' action="">
                            <input className='border-b-2 p-4 outline-none' type="text" name="" id="" placeholder='Name...' required/>
                            <input className='border-b-2 p-4 outline-none' type="email" name="" id="" placeholder='Email...' required/>
                            <input className='border-b-2 p-4 outline-none' type="password" name="" id="" placeholder='Password...' required/>
                            <input className='border-b-2 p-4 outline-none' type="password" name="" id="" placeholder='Re-type password...' required/>
                            <button className='py-3 bg-lime-500 mt-10 mb-3 font-bold hover:bg-lime-600'>SIGN UP</button>
                            <p>Already have account? <NavLink className='text-lime-700 hover:text-lime-800' to="/login">Click here</NavLink></p>
                        </form>
                    </div>
                    <div className='md:w-1/2 flex justify-center items-center pt-10 md:pt-0 border-t-2 md:border-t-0'>
                        <div className='space-y-6'>
                            <p className='text-center'>Log in using the following</p>
                            <div className='flex justify-center items-center bg-lime-500 px-4 hover:bg-lime-600'>
                                <p className='p-2'><img style={{width:'24px', height:'24px'}} src={googleIcon} alt="" /></p>
                                <button 
                                className='py-3 font-bold '
                                onClick={signInUsingGoogle}
                                >LOG IN WITH GOOGLE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default SignUp;