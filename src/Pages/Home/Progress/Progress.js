import React from 'react';
import './Progress.css'

const Progress = () => {
    return (
        <div className='container'>
            <div className='row my-5'>
                <div className='progress-info col-sm-12 col-md-3 text-center'>
                    <h1>20981+</h1>
                    <p>Total Visitor</p>
                </div>
                <div className='progress-info col-sm-12 col-md-3 text-center'>
                    <h1>1500+</h1>
                    <p>Total job completed</p>
                </div>
                <div className='progress-info col-sm-12 col-md-3 text-center'>
                    <h1>650+</h1>
                    <p>Total Client</p>
                </div>
                <div className='progress-info col-sm-12 col-md-3 text-center'>
                    <h1>98%</h1>
                    <p>Client Review</p>
                </div>
            </div>
        </div>
    );
};

export default Progress;