import React from 'react';
import './About.css';
import aboutme from '../../images/aboutme.png'


const About = () => {
    return (
        <div className='container'>
        <div className='banner-container row align-items-center'>
            <div className='col-sm-12 col-lg-6 p-5'>
                <h3><span className='hello'>Hello...!</span> <br /> I am Naimur Rahamar Emon. <br /><span className='job-title'>Professional Graphic Designer & Web Developer.</span></h3>
                <p className='mt-4'>My dear customer, I always work for the satisfaction of my client and try to provide something good.</p>
                <button className='btn-hero'>Contact me</button>
            </div>
            <div className='col-sm-12 col-lg-6 p-5'>
                <img className='about-img w-100' src={aboutme} alt="" srcset="" />
            </div>
        </div>
    </div>
    );
};

export default About;