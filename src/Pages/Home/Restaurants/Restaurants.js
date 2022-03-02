import React, { useEffect, useState } from 'react';
import Restaurant from '../Restaurant/Restaurant';

const Restaurants = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetch('./fakeRestaurants.json')
        .then(res => res.json())
        .then(data => setRestaurants(data))
    }, []);

    // console.log(restaurants);

    return (
        <div id='restaurants' className='restaurants_container bg-gray-800'>
            <div className='mx-10 md:mx-20 lg:mx-60'>
                <div className='py-32'>
                    <div className='text-center'>
                        <h2 className='text-white text-5xl font-bold inline-block pb-10 mb-20 border-lime-500 border-b-4'>Restaurants</h2>
                    </div>
                    <div className='grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-10'>
                        {
                            restaurants.map(restaurant => <Restaurant restaurant={restaurant} key={restaurant.res_id}></Restaurant>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Restaurants;