import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import Food from '../Food/Food';

const RestaurantFoods = () => {
    const {id} = useParams();

    const [restaurant, setRestaurant] = useState({});

    const restaurantFinding = (restaurants) => {
        const matchedRestaurant = restaurants.find(restaurant => restaurant.res_id === id);
        setRestaurant(matchedRestaurant);
    }

    useEffect(()=> {
        fetch('/fakeRestaurants.json')
        .then(res => res.json())
        .then(data => restaurantFinding(data))
    }, []);


    const {foods} = restaurant;
    // console.log(restaurant.foods);
    
    return (
        <div>
            <Navbar></Navbar>
            <div className='mx-10 md:mx-20 lg:mx-60'>
                <h2 className='text-3xl font-bold text-center py-10'> {restaurant.restaurant_name}</h2>
                <div className='grid grid-cols-3 g-4'>
                    {
                        foods?.map(singleFood => <Food food={singleFood} key={singleFood.food_id}></Food>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default RestaurantFoods;