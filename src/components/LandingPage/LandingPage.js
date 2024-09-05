import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom
import Navbar from '../Navbar/Navbar'

  
const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <div className="plans-container">
                <Link to="/prepaid" className="plan-card">
                    <h3>Prepaid Plan</h3>
                    <p>Affordable and reliable for everyday use.</p>
                </Link>
                <Link to="/postpaid" className="plan-card">
                    <h3>Postpaid Plan</h3>
                    <p>Unlimited data and premium features.</p>
                </Link>
           
            </div>

            <div className="customer-reviews">
                <h2>What Our Customers Say</h2>
                <div className="review">
                    <p>“Best telecom service I’ve ever used!” - Harshit Rana</p>
                </div>
                <div className="review">
                    <p>“Reliable and fast Internet, highly recommend!” - Radhika Menon</p>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
