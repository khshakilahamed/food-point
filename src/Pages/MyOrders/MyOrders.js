import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Contact from '../Home/Contact/Contact';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import MyOrder from './MyOrder';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const {user} = useAuth();


    const order = (orders) => {
        const matchedOrders = orders.filter(order => order.email === user.email)
        setOrders(matchedOrders);
    }

    useEffect(()=> {
        fetch('https://shielded-basin-86876.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => order(data))
    }, [orders, order]);

    return (
        <div>
            <Navbar></Navbar>
            <div className='mx-10 md:mx-10 lg:mx-14 xl:mx-20 2xl:mx-28 pt-24'>
                <div>
                    <div>
                        <h2 className='text-center text-2xl py-2 font-bold my-10 bg-yellow-500 '>My Orders</h2>
                    </div>
                {
                    orders.map(order => <MyOrder order={order} key={order._id}></MyOrder>)
                }
                </div>
            </div>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default MyOrders;