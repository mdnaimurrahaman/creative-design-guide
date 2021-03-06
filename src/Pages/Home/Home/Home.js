import React from 'react';
import Banner from '../Banner/Banner';
import Progress from '../Progress/Progress';
import Services from '../Services/Services';
import './Home.css'


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Progress></Progress>
        </div>
    );
};

export default Home;