import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Contact from '../Home/Contact/Contact';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import MyOrder from './MyOrder';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const {user} = useAuth();

    // console.log(orders)

    const order = (orders) => {
        const matchedOrders = orders.filter(order => order.email === user.email)
        setOrders(matchedOrders);
    }

    useEffect(()=> {
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => order(data))
    }, []);

    // useEffect(()=> {
    //     fetch('http://localhost:5000/foods')
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // }, []);

    return (
        <div>
            <Navbar></Navbar>
            <div className='mx-10 md:mx-20 lg:mx-60 pt-24'>
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