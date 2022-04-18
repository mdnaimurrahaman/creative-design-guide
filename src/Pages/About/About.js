import React from 'react';
import './About.css';
import photo from '../../images/photo.png'


const About = () => {
    return (
        <div className='container'>
        <div className='banner-container row align-items-center'>
            <div className='col-sm-12 col-lg-6 p-5'>
                <h3><span className='hello'>Hello...!</span> <br /> I'm Naimur Rahamar Emon. <br /><span className='job-title'>Professional Graphic Designer & Web Developer.</span></h3>
                <p className='mt-4'>Future Goals is Become an Full Stack Web Developer.I will work hard for the next 5-6 months to keep my position in the programming sector stable InshaAllah.  I will try to improve new skills to survive in the programming sector.  Since my dream is to be a full-stack developer, I will work hard and play an important role in the IT sector of the country.</p>
                <button className='btn-hero'>Contact me</button>
            </div>
            <div className='col-sm-12 col-lg-6 p-5'>
                <img className='about-img w-100' src={photo} alt="" srcset="" />
            </div>
        </div>
    </div>
    );
};

export default About;