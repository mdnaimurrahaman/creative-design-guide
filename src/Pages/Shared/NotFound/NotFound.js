import React from 'react';
import './NotFound.css'
import notfound from '../../../images/notfound.png'

const NotFound = () => {
    return (
        <div className='container'>
            <img className='notfound mt-5' src={notfound} alt="" srcset="" />
        </div>
    );
};

export default NotFound;