import React from 'react';
import { NavLink } from 'react-router-dom';

const MyOrder = ({order}) => {
    // console.log(order);
    const {_id, food_name, img, price, orderStatus} = order || {};

    const handleDeleteOrder = (id) => {
        const confirm = window.confirm('Are you sure you want to cancel the order?');
        if(confirm){
            fetch(`https://shielded-basin-86876.herokuapp.com/orders/${id}`, {
                method:'DELETE',
                headers:{
                    'content-type':'application.json'
                }
            })
            .then(res => res.json())
            .then(data => console.log(data))
        }
    }

    return (
        <div>
            <div className='md:flex justify-between'>
                <div className='sm:flex'>
                    <div>
                        <img style={{width: "150px"}} src={img} alt="" />
                    </div>
                    <div className='sm:pl-3'>
                        <p>OrderId: <span className='text-blue-500'>{_id}</span></p>
                        <h2 className='text-xl'>{food_name}</h2>
                        <p className='text-3xl text-yellow-500 font-bold'>&#2547;{price}</p>
                    </div>
                </div>
                <div className='space-y-2 py-4 sm:py-0'>
                    <NavLink to= {`manage/${_id}`}>
                        <p className='text-blue-500 hover:text-blue-700 cursor-pointer'>Manage</p>
                    </NavLink>
                    <p>{orderStatus}</p>
                    <p onClick={() => handleDeleteOrder(_id)} className='border px-2 py-1 hover:bg-gray-100 cursor-pointer inline-block'>Cancel</p>
                </div>
            </div>
            <hr className='my-2'/>
        </div>
    );
};

export default MyOrder;