import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const MyOrders = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='mx-10 md:mx-20 lg:mx-60 pt-20 h-screen'>
                <footer></footer>
                <h2 >Hello</h2>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyOrders;