import React from 'react';

const Restaurant = (props) => {
    console.log(props);
    const {id, restaurant_name, restaurant_img, time} = props.restaurant; 
    console.log(id);
    return (
        <div className='bg-gray-400 p-4 rounded' >
            <div>
                <img className='w-full h-full rounded' style={{height:"300px"}} src={restaurant_img} alt="" />
            </div>
            <div className='space-y-3 py-3'>
                <h2 className='text-xl font-bold text-gray-200'>{restaurant_name}</h2>
                <div className='flex justify-between items-center'>
                    <button className='bg-lime-600 py-2 px-4 font-bold '>Go to Store</button>
                    <p className='font-thin text-gray-'>{time}</p>
                </div>
            </div>
        </div>
    );
};

export default Restaurant;