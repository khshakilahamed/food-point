import React from 'react';

const Food = ({food}) => {
    // console.log(food);
    const {food_id, food_name, img, persons, price} = food;

    return (
        <div className='p-3 rounded-3xl' style={{background:'#FFAD00'}}>
            <img style={{height:'300px', width:''}} className="w-full h-full rounded-3xl" src={img} alt="" />
            <div className='pt-3'>
                <h2 className='text-xl font-bold'>{food_name.slice(0, 29)}...</h2>
                <div className='flex justify-between items-center py-3'>
                    <p className='text-3xl font-bold'>&#2547; {price}</p>
                    <p>{persons}</p>
                </div>
                <button className='bg-lime-500 py-2 px-4 font-bold rounded-3xl hover:bg-lime-700'>Order Now</button>
            </div>

        </div>
    );
};

export default Food;