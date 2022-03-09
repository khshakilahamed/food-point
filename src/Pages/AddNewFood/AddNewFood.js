import React from 'react';
import Contact from '../Home/Contact/Contact';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const AddNewFood = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='mx-10 md:mx-10 lg:mx-14 xl:mx-20 2xl:mx-28 pt-24'>
                <div className='mb-10'>
                    <h2 className='py-3 my-10 text-2xl font-bold text-center bg-yellow-500'>Please add a new food here</h2>
                    <div className='flex flex-col w-full'>
                        <input className='border border-gray-500 my-2 p-2 rounded-md' type="text" name="" id="" placeholder='Food Name'/>
                        <input className='border border-gray-500 my-2 p-2 rounded-md' type="text" name="" id="" placeholder='Restaurant Name'/>
                        <input className='border border-gray-500 my-2 p-2 rounded-md' type="text" name="" id="" placeholder='Restaurant ID'/>
                        <input className='border border-gray-500 my-2 p-2 rounded-md' type="text" name="" id="" placeholder='Food ID'/>
                        <input className='border border-gray-500 my-2 p-2 rounded-md' type="text" placeholder='Image URL'/>
                        <textarea className='border border-gray-500 my-2 p-2 rounded-md' name="" id="" cols="30" rows="5" placeholder='Short Description'></textarea>
                        <div>
                            <button className='bg-yellow-500 px-4 py-3 font-bold text-xl rounded-md'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default AddNewFood;