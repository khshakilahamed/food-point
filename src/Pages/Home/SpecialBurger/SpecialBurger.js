import React from 'react';
import './SpecialBurger.css'

const SpecialBurger = () => {
    return (
        <div className='special_burger_container'>
            <div className='mx-10 md:mx-20 lg:mx-60'>
                <div className='flex justify-start items-center h-full'>
                    <div className='w-1/2 text-white'>
                        {/* <p>Tasty Burger</p>
                        <h2>Explox The Best Burger Place Near You</h2>
                        <button>Buy Now</button> */}
                    </div>
                    <div className='w-1/2'>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialBurger;