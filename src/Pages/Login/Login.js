import React from 'react';
import Contact from '../Home/Contact/Contact';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import googleIcon from '../../images/google.png'
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';
    const history = useHistory();


    const handleGoogleLogin= () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='mx-10 md:mx-10 lg:mx-14 xl:mx-20 2xl:mx-28 pt-24'>
                <div className='text-center'>
                    <h2 className='text-center text-7xl font-thin py-10 inline-block border-b-2 border-yellow-500'>Log In</h2>
                </div>
                <div className='md:flex my-20'>
                    <div className='md:border-r-2 md:w-1/2  md:pr-16 lg:pr-24 pb-10 md:pb-0 '>
                        <form className='flex flex-col' action="">
                            <input className='border-b-2 p-4 outline-none' type="email" name="" id="" placeholder='Email...' required/>
                            <input className='border-b-2 p-4 outline-none' type="password" name="" id="" placeholder='Password...' required/>
                            <p className='font-thin text-right text-lime-600'>forgot password</p>
                            <button className='py-3 bg-lime-500 mt-10 mb-3 font-bold hover:bg-lime-600'>LOG IN</button>
                            <p>Don't Have Account? <NavLink className='text-lime-700 hover:text-lime-800' to="/signup">Click here</NavLink></p>
                        </form>
                    </div>
                    <div className='md:w-1/2 flex justify-center items-center pt-10 md:pt-0 border-t-2 md:border-t-0'>
                        <div className='space-y-6'>
                            <p className='text-center'>Log in using the following</p>
                            <div className='flex justify-center items-center bg-lime-500 px-4 hover:bg-lime-600'>
                                <p className='p-2'><img style={{width:'24px', height:'24px'}} src={googleIcon} alt="" /></p>
                                <button 
                                className='py-3 font-bold '
                                onClick={handleGoogleLogin}
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

export default Login;