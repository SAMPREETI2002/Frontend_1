import React, { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../UserContext'; // Adjust the path based on file structure


const GenerateInvoice = () => {
  const { userEmail } = useContext(UserContext); // Get the logged-in user's email
  const [invoice, setInvoice] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerateInvoice = async () => {
    setLoading(true);
    setError(null);
    setInvoice(null);

    

    try {
        // const response = await axios.post('/generateInvoice', { customerMail: userEmail });
        console.log(`Email is : ${userEmail}`)
        const response = await axios.post('http://localhost:9099/generateInvoice', { customerMail: userEmail });

        
        // Output the entire response to the console
        console.log('Response:', response);
        
        // Output only the invoice data to the console
        console.log('Invoice Data:', response.data.invoice);
        
        setInvoice(response.data.invoice);
      } catch (err) {
        console.error('Error:', err); // Log the error to the console
        setError('Failed to generate invoice. Please try again.');
      } finally {
        setLoading(false);
      }
    };

  return (
    <div>
      <h2>Generate Invoice</h2>
      <button onClick={handleGenerateInvoice} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Invoice'}
      </button>
      {error && <p>{error}</p>}
      {invoice && (
        <div>
          <p>Invoice ID: {invoice.invoiceId}</p>
          <p>Customer Name: {invoice.customerName}</p>
          <p>Amount: {invoice.amount}</p>
        </div>
      )}
    </div>
  );
};

export default GenerateInvoice;
