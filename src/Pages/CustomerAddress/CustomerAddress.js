import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Contact from '../Home/Contact/Contact';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const CustomerAddress = () => {
    const {id} = useParams();
    console.log(id);
    const [food, setFood] = useState({});

    const {food_name, img, price, des} = food;

    const findTheFood = (foods) => {
        const matchedFood = foods.find(food => food.food_id === id);
        setFood(matchedFood);
    }

    console.log(food)

    useEffect(() =>{
        fetch('/fakeFoods.json')
        .then(res => res.json())
        .then(data => findTheFood(data));
    }, []);

    return (
        <div>
            <Navbar></Navbar>
            <div className='mx-10 md:mx-10 lg:mx-14 xl:mx-40 2xl:mx-60 pt-24 '>
                <h2 className='text-2xl text-center my-5 font-bold'>Please, Provide the delivery address here</h2>
            <div className='md:flex py-10'>
                <div className='md:w-1/2 flex '>
                    <div className='w-1/2'>
                        <img className='w-full' src={img} alt="" />
                    </div>
                    <div className='w-1/2 pl-3 space-y-2'>
                        <h2 className='text-2xl font-bold'>{food_name}</h2>
                        <p>{price}</p>
                        <p>Description:</p>
                        <p>{des}</p>
                    </div>

                </div>
                <div className='md:w-1/2'>
                    <form className='flex flex-col'>
                        <input className='border outline-none my-1 p-1 w-full' type="text" name="" id="" placeholder='Name...'/>
                        <input className='border outline-none my-1 p-1 w-full' type="number" name="" id="" placeholder='Phone Number'/>
                        <input className='border outline-none my-1 p-1 w-full' type="email" name="" id="" placeholder='Email Address'/>
                        <textarea className='border outline-none my-1 p-1 w-full' name="" id="" cols="30" rows="5" placeholder='Your Address'></textarea>
                        <input className='bg-yellow-500 my-2 p-2' type="submit" value="Submit" />
                    </form>
                </div>
                
            </div>
            </div>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default CustomerAddress;