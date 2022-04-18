import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='blogs-title text-center my-5 fw-bold'>Blogs</h1>
            <div className='row'>
                <div className='first-qus col-sm-12 col-md-6 p-4'>
                    <h5>1.Why are you using firebase? What other options do you have to implement authentication?</h5>
                    <p>i'm Using Firebase For Multipurposes First of all i'm using firebase for Authorised user and also i can build Authentication systeam using firebase Second Of all i'm Hosting Website Using Firebase and firebase is a data base thats why i can used firebase for store data .At this moment i have lot of firebase alternative for implement authentication <br /> for example :</p>
                    <div className='d-flex auth-name'>
                        <li>1. Paese</li>
                        <li>2. Back4App</li>
                        <li>3. AWS Amplify</li>
                        <li>4. Kuzzle</li>
                        <li>5. Couchbase</li>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 p-4'>
                    <div>
                        <h5>2.What other services does firebase provide other than authentication?</h5>
                        <p>Firebase provide Lot of things First of all you can host website fully free in firebase and second of all firebase has real time database you can use firebase as a database and firebase provide cloud you can used cloud function And firbase provide lot of extenstion that you can used in your project</p>
                    </div>
                    <div>
                        <h5>3.Difference between authorization and authentication</h5>
                        <p>First Of All Authentication Means veryfying who some one is , i mean who are you whats your account is real or fake and you i mean user is real or fake and second of all authorization means veryfying whats specific applications, filses data and etc.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;