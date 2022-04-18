import React from 'react';
import './Progress.css'

const Progress = () => {
    return (
        <div className='container'>
            <h1 className='text-center progress-title mt-5'>Progress Info</h1>
            <div className='progress-container my-5'>
                <div className='progress-info'>
                    <h1>20981+</h1>
                    <p>Total Visitor</p>
                </div>
                <div className='progress-info'>
                    <h1>1500+</h1>
                    <p>Total job completed</p>
                </div>
                <div className='progress-info'>
                    <h1>650+</h1>
                    <p>Total Client</p>
                </div>
                <div className='progress-info'>
                    <h1>98%</h1>
                    <p>Client Review</p>
                </div>
            </div>
        </div>
    );
};

export default Progress;