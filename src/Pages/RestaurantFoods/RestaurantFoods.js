import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import Food from '../RestaurantFood/RestaurantFood';
import { FaFacebook, FaTwitter, FaGooglePlus, FaMapMarkerAlt, FaDoorOpen, FaPhoneAlt, FaBusinessTime } from "react-icons/fa";

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


    const {restaurant_name, restaurant_img, address, time, phone, foods} = restaurant;
    // console.log(restaurant);
    
    return (
        <div>
            <Navbar></Navbar>
            <div className='mx-10 md:mx-20 lg:mx-60'>
                <div className='md:flex py-10'>
                    <div className='md:w-1/2'>
                        <img style={{height: '500px'}} className="w-full" src={restaurant_img} alt="" />
                    </div>
                    <div className='md:w-1/2 md:px-8 space-y-4 pt-8 md:pt-0'>
                        <h2 className='text-5xl font-bold'>  {restaurant_name}</h2>
                        <div className='flex items-center'>
                            <FaMapMarkerAlt/>
                            <p className='pl-2'>{address}</p>
                        </div>
                        <div className='flex items-center'>
                            <FaPhoneAlt/>
                            <p className='pl-2'>{phone}</p>
                        </div>
                        <div className='flex items-center'>
                            <FaBusinessTime/>
                            <p className='pl-2'>{time}</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='text-center'>
                    <h2 className='inline-block text-5xl font-bold py-8 mb-10 border-yellow-500 border-b-4'>Foods</h2>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-10'>
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