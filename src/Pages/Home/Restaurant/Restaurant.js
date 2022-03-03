import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Restaurant = (props) => {
    // console.log(props);
    const {res_id, restaurant_name, restaurant_img, time} = props.restaurant; 
    // console.log(id);
    return (
        <div style={{background:'#FFAD00'}} className=' p-4 rounded-3xl ' >
            <div>
                <img className='w-full h-full rounded-3xl' style={{height:"300px"}} src={restaurant_img} alt="" />
            </div>
            <div className='space-y-3 py-3'>
                <h2 className='text-xl font-extrabold'>{restaurant_name}</h2>
                <div className='flex justify-between items-center'>
                    <NavLink to={`/restaurantFood/${res_id}`}><button className='bg-lime-600 flex justify-center items-center py-2 px-4 font-bold rounded-3xl hover:bg-lime-700'>Go to Store <FaArrowRight className='pl-1  '/></button></NavLink>
                    <p className='font-semibold text-gray-'>{time}</p>
                </div>
            </div>
        </div>
    );
};

export default Restaurant;