import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../hooks/useAuth';
import Contact from '../Home/Contact/Contact';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Manage = () => {
    const [order, setOrder] = useState([]);
    const {user} = useAuth();
    const {id} = useParams();

    const [toggle, setToggle] = useState(false);

    useEffect(()=> {
        fetch(`http://localhost:5000/orders/${id}`)
        .then(res => res.json())
        .then(data => setOrder(data))
    }, [id]);

    const {_id, food_name, price, img, userName, userAddress, userPhoneNumber, email} = order || {};
    console.log(order)

    return (
        <div>
            <Navbar></Navbar>
            <div className='mx-10 md:mx-10 lg:mx-14 xl:mx-40 2xl:mx-44 pt-24'>
                <h2 className='text-2xl font-bold bg-yellow-500 p-2 my-10'>MyOrders/Manage</h2>
                <div className='md:flex justify-between py-6'>
                    <div className='sm:flex py-5 sm:py-0 md:w-1/2'>
                        <div>
                            <img style={{height:'200px'}} src={img} alt="" />
                        </div>
                        <div className='sm:pl-3 py-3 sm:py-0'>
                            <p className='font-bold'>{food_name}</p>
                            <p className='text-3xl text-yellow-500 font-bold'>&#2547;{price}</p>
                        </div>
                    </div>
                    <div className='md:pl-6 my-4 md:my-0 md:w-1/2'>
                        {
                            !toggle ? (
                                <div className='text-lg'>
                                    <h2 className='font-bold'>Shipping Address</h2>
                                    <p>Name: {userName}</p>
                                    <p>Phone: {userPhoneNumber}</p>
                                    <p>Email:{email}</p>
                                    <p>Address: {userAddress}</p>
                                    <p onClick={() => setToggle(true)} className='my-3 text-blue-500 cursor-pointer font-bold hover:text-blue-800'>update</p>
                                </div>
                            ): (
                            <div className='w-full flex flex-col text-lg'>
                                <p className='font-bold text-center'>Please update your information</p>
                                <label  htmlFor="">Name:</label>
                                <input className='border border-gray-500 px-2 rounded-md p-1 mb-2' type="text" value={userName}/>
                                <label  htmlFor="">Email:</label>
                                <input className='border border-gray-500 rounded-md p-1 mb-2' type="email" value={email}/>
                                <label htmlFor="">Phone:</label>
                                <input className='border border-gray-500 px-2 rounded-md p-1 mb-2' type="number" value={userPhoneNumber}/>
                                <label  htmlFor="">Address:</label>
                                <textarea className='border border-gray-500 px-2 rounded-md' value={userAddress} name="" id="" cols="30" rows=""></textarea>
                                <div className='space-x-2'>
                                    <button onClick={() => setToggle(false)} className='px-3 py-1 my-3 border rounded-md text-lg font-bold'>cancel</button>
                                    <button className='px-3 py-1 my-3 border bg-yellow-500 rounded-md text-lg font-bold'>Save</button>
                                </div>
                            </div>
                            )
                        }

                        
                    </div>
                </div>
            </div>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Manage;