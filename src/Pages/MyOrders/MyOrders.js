import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const {user} = useAuth();

    const order = (orders) => {
        const matchedOrders = orders.filter(order => order.email == user.email)
        setOrders(matchedOrders);
    }

    useEffect(()=> {
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => order(data))
    }, []);

    return (
        <div>
            <Navbar></Navbar>
            <div className='mx-10 md:mx-20 lg:mx-60 pt-24'>
                <div>
                {
                    orders.map(order => <div>
                        <h2>{order.userName}</h2>
                        <p>email: {order.email}</p>
                        <p>Phone: {order.userPhoneNumber}</p>
                    </div>)
                }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyOrders;