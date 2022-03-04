import React from 'react';
import { NavLink } from 'react-router-dom';

const Food = ({food}) => {
    // console.log(food);
    const {food_id, food_name, img, persons, price} = food;
    return (
        <div className='p-3 '>
            <img style={{height:'300px', width:''}} className="w-full h-full" src={img} alt="" />
            <div className='pt-3'>
                <h2 className='text-xl font-bold'>{food_name.slice(0, 29)}...</h2>
                <div className='flex justify-between items-center py-3'>
                    <p className='text-3xl font-bold text-yellow-500'>&#2547; {price}</p>
                    <p>{persons}</p>
                </div>
                <NavLink to={`/placeOrder/${food_id}`}>
                        <button className='bg-lime-500 py-2 px-4 font-bold rounded-3xl hover:bg-lime-700'>Order Now</button>
                    </NavLink>
            </div>

        </div>
    );
};

export default Food;