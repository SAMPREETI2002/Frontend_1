import React from 'react';
import './PlanOptions.css';

function PlanOptions() {
  return (
    <section className="plan-options">
      <div className="plan">
        <h2>Prepaid Plan</h2>
        <p>Affordable and reliable for everyday use.</p>
      </div>
      <div className="plan">
        <h2>Postpaid Plan</h2>
        <p>Unlimited data and premium features.</p>
      </div>
      <div className="plan">
        <h2>Login/Register</h2>
        <p>Login/Register to explore more features.</p>
      </div>
    </section>
  );
}

export default PlanOptions;
