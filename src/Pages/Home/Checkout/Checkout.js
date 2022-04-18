import React from "react";
import './Checkout.css'

const Checkout = () => {
  return (
    <div className="checkout-container">
      <h1 className="text-center checkout-title">Please Checkout</h1>
      <form className="checkout-form">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Your Email' />
          <input type="number" placeholder='Phone Number' />
          <input type="text" placeholder='Your Address' />
      </form>
      <button>Check out</button>
    </div>
  );
};

export default Checkout;
