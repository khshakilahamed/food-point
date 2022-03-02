import React from 'react';

const Food = ({food}) => {
    console.log(food);
    const {food_id, food_name, img, persons, price} = food;
    return (
        <div className=''>
            <img style={{height:'300px', width:'300px'}} className="w-full h-full" src={img} alt="" />
            <h2 className=''>{food_name}</h2>

        </div>
    );
};

export default Food;