import React from 'react';
import './Banner.css'
import banner from '../../../images/banner.png'

const Banner = () => {
    return (
        <div className='container'>
            <div className='banner-container row align-items-center'>
                <div className='banner-title col-sm-12 col-lg-6 p-5'>
                    <h1><span>Choose Your Favorite Item &</span> Collect Super Rate Design.</h1>
                    <p className='mt-4'>My dear customer, I always work for the satisfaction of my client and try to provide something good.</p>
                    <button className='btn-hero'>Explore Now</button>
                </div>
                <div className='col-sm-12 col-lg-6 p-5'>
                    <img className='banner-img' src={banner} alt="" srcset="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;