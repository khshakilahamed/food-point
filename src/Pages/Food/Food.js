import React from 'react';

const Food = ({food}) => {
    console.log(food);
    const {food_id, food_name, img, persons, price} = food;
    return (
        <div className='py-3'>
            <img style={{height:'300px', width:'300px'}} className="w-full h-full" src={img} alt="" />
            <div>
                <h2 className='text-xl font-bold'>{food_name}</h2>
                <div>
                    <p className='text-2xl font-bold'>&#2547; {price}</p>
                    <p>{persons}</p>
                </div>
            </div>

        </div>
    );
};

export default Food;