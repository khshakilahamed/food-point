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
        <div className='restaurants_container bg-gray-800'>
            <div className='mx-10 md:mx-20 lg:mx-60'>
                <div className='py-32'>
                    <h2 className='text-white text-4xl font-bold text-center pb-20'>Restaurants</h2>
                    <div className='grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10'>
                        {
                            restaurants.map(restaurant => <Restaurant restaurant={restaurant} key={restaurant.id}></Restaurant>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Restaurants;