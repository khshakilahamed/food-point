import React, { useEffect, useState } from 'react';
import Contact from '../Home/Contact/Contact';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import './ManageOrders.css'

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);

    const handleApproveOrder = (id) => {
        const confirm = window.confirm('you are going to approve the product?');
        if(confirm){
            const matchedOrder = orders.filter(order => order._id === id);
            // console.log(matchedOrder)

            fetch(`http://localhost:5000/orders/${id}`, {
                method:'PUT',
                headers:{
                    'content-type':'application.json'
                },
                body: JSON.stringify(matchedOrder)
            })
            .then(res => res.json())
            .then(data => console.log(data))
        }
    }

    const handleDeleteOrder = (id) => {
        const confirm = window.confirm('Are you sure you want to cancel the order?');
        if(confirm){
            fetch(`http://localhost:5000/orders/${id}`, {
                method:'DELETE',
                headers:{
                    'content-type':'application.json'
                }
            })
            .then(res => res.json())
            .then(data => console.log(data))
        }

    }

    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [orders]);

    return (
        <div>
            <Navbar></Navbar>
            <div className='mx-10 md:mx-10 lg:mx-14 xl:mx-40 2xl:mx-44 pt-24'>
               <div className='my-10'>
                    <h2 className='px-2 py-3 text-2xl font-bold text-center bg-yellow-500'>Manage All Orders</h2>
                    <div className='overflow-x-auto bg-gray-100 my-3'>
                        <table>
                            <thead>
                                <tr >
                                    <th>Customer</th>
                                    <th>Address</th>
                                    <th>Food Name</th>
                                    <th>Price</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                {
                                    orders.map(order => <tr>
                                        <td>Name: {order.userName} <br /> Email: {order.email} <br /> Phone: {order.userPhoneNumber}</td>
                                        <td>{order.userAddress} </td>
                                        <td>{order.food_name}</td>
                                        <td>&#2547;{order.price}</td>
                                        <td>{order.orderStatus}</td>
                                        <td>
                                            <button onClick={() => handleDeleteOrder(order._id)} 
                                            className="border-none bg-red-500 py-1 px-2 rounded rounded-md text-white">Delete</button>
                                            {
                                                order.orderStatus === 'pending' && <button onClick={() => handleApproveOrder(order._id)} className="border-none bg-green-500 py-1 px-2 rounded rounded-md text-white">Approve</button>
                                            }
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
               </div>

            </div>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default ManageOrders;