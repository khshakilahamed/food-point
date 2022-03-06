import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../hooks/useAuth';
import Contact from '../Home/Contact/Contact';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const PlaceOrder = () => {
    const {id} = useParams();
    const [food, setFood] = useState({});
    const {user} = useAuth();

    const phoneNumberRef = useRef();
    const addressRef = useRef();

    const handleConfirm = (e) => {
        const userPhoneNumber = phoneNumberRef.current.value;
        const userAddress = addressRef.current.value;

        const userName = user.displayName;
        const email = user.email;

        const date = new Date();
        const order = {userName, email, userPhoneNumber, userAddress, date, ...food};
        
        if(userPhoneNumber.length==0 || userAddress.length==0){
            alert('Please provide your name & phone number');
        }

        else{
            fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(order)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    window.confirm('Your Order Successful.');
                    e.target.reset();
                }
            })
        }

        e.preventDefault();
    }


    const {displayName, email} = user;

    const {food_name, img, price, des} = food;

    const findTheFood = (foods) => {
        const matchedFood = foods.find(food => food.food_id === id);
        setFood(matchedFood);
    }

    // console.log(food);


    

    useEffect(() =>{
        fetch('/fakeFoods.json')
        .then(res => res.json())
        .then(data => findTheFood(data));
    }, []);

    return (
        <div>
            <Navbar></Navbar>
            <div className='mx-10 md:mx-10 lg:mx-14 xl:mx-40 2xl:mx-60 pt-24 '>
                <div className='text-center my-6'>
                    <h2 className='text-2xl inline border-b-4 pb-3 border-yellow-500 my-5 font-bold'>Please, Provide the delivery address here</h2>
                </div>
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
                    <div className='md:w-1/2 md:pl-6'>
                        <form onSubmit={handleConfirm} className='flex flex-col'>
                            <input className='border outline-none my-1 p-1 w-full' value={displayName} type="text" id="" placeholder='Name...'/>
                            <input className='border outline-none my-1 p-1 w-full' value={email}  type="email" name="" id="" placeholder='Email Address'/>
                            <input className='border outline-none my-1 p-1 w-full' ref={phoneNumberRef} type="number" name="" id="" placeholder='Phone Number'/>
                            <textarea className='border outline-none my-1 p-1 w-full' ref={addressRef} name="" id="" cols="30" rows="5" placeholder='Your Address'></textarea>
                            <input className='bg-yellow-500 my-2 p-2 cursor-pointer font-bold hover:bg-yellow-00' type="submit" value="Submit" />
                        </form>
                    </div>                  
                </div>
            </div>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default PlaceOrder;