import React, { useEffect, useState , useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../UserContext';
import './Landing1.css';
import Navbar from '../Navbar1/Navbar1';


const Landing1 = () => {
  const { userEmail } = useContext(UserContext); // Get the logged-in user's email
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await axios.get('http://localhost:9099/customer/name', {
          params: { email: userEmail },
        });
        setUsername(response.data.customerName);
      } catch (err) {
        setError('Failed to fetch username.');
        console.error('Error:', err);
      }
    };

    if (userEmail) {
      fetchUsername();
    }
  }, [userEmail]);

  return (
    <div>
       <Navbar username={username} />
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
    </div>
  );
};

export default Landing1;
