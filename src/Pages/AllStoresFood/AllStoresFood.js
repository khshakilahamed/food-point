import React, { useEffect, useState } from 'react';
import Food from '../Home/Food/Food';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const AllStoresFood = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('./fakeFoods.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, []);

    return (
        <div>
            <Navbar></Navbar>
            <div className=' bg-gray-800'>
                <div className='mx-10 md:mx-10 lg:mx-14 xl:mx-40 2xl:mx-60 pt-16'>
                    <div className='pt-20'>
                        <div className='text-center'>
                            <h2 className='text-white text-5xl font-bold inline-block pb-4 mb-20 border-yellow-500 border-b-4'>All Foods</h2>
                        </div>
                        <div className='grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-10'>
                            {
                                foods.map(food => <Food food={food} key={Math.random()}></Food>)
                            }
                        </div>
                    </div>
                    <div className='text-center pt-10'>
                        <p className='inline  text-lime-500 border-b-2 border-lime-500 hover:text-lime-800 cursor-pointer'>View All Foods</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllStoresFood;