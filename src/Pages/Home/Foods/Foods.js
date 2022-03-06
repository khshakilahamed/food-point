import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Food from '../Food/Food';

const Foods = () => {

    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/foods')
        .then(res => res.json())
        .then(data => setFoods(data))
    }, []);

    const starting_value = Math.floor(Math.random()*10);

    return (
        <div id='foods' className=' bg-gray-800'>
            <div className='mx-10 md:mx-10 lg:mx-14 xl:mx-40 2xl:mx-60'>
                <div className='pt-32'>
                    <div className='text-center'>
                        <h2 className='text-white text-5xl font-bold inline-block pb-6 mb-20 border-lime-500 border-b-4'>Foods</h2>
                    </div>
                    <div className='grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-10'>
                        {
                            foods.slice(starting_value, starting_value+6).map(food => <Food food={food} key={Math.random()}></Food>)
                        }
                    </div>
                </div>
                <div className='text-center pt-10'>
                    <p className='inline  text-lime-500 border-b-2 border-lime-500 hover:text-lime-800 cursor-pointer'><NavLink to='/allFoods'>View All Foods</NavLink></p>
                </div>
            </div>
        </div>
    );
};

export default Foods;