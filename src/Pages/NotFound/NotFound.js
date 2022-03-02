import React from 'react';

const NotFound = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <div>
                <h2 className='text-9xl text-red-600'>404!</h2>
                <p className='text-center text-xl'>page not found</p>
            </div>
        </div>
    );
};

export default NotFound;