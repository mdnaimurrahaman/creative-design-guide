import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {name, img, description} = service ;

    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className='service-container card p-0'>
                <img className='service-img' src={img} alt="" srcset="" />
                <div className='card-body'>
                    <h2>{name}</h2>
                    <p><small>{description}</small></p>
                </div>
                <Link className='btn-checkout text-decoration-none text-white' to="/checkout">Checkout</Link>
            </div>
        </div>
    );
};

export default Service;
