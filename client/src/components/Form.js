import React, { useState } from 'react';
import Axios from 'axios';

const Form = () => {
  const [requestType, setRequestType] = useState('donor'); // Default to donor request
  const [bloodType, setBloodType] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestData = {
      requestType,
      bloodType,
      quantity,
      name,
      email,
    };
    Axios.post('http://localhost:3001/createRequest', requestData)
      .then((response) => {
        console.log('Request created:', response.data);
        // Reset the form after successful request submission
        setRequestType('donor');
        setBloodType('');
        setQuantity(0);
        setName('');
        setEmail('');
      })
      .catch((error) => {
        console.log('Error creating request:', error);
      });
  };

  return (
    <div className="request-form-container">
      <h2 className="form-heading">Make a Request</h2>
      <form onSubmit={handleSubmit} className="request-form">
        <div className="form-group">
          <label>Request Type:</label>
          <select value={requestType} onChange={(e) => setRequestType(e.target.value)}>
            <option value="donor">Donor</option>
            <option value="recipient">Recipient</option>
          </select>
        </div>
        <div className="form-group">
          <label>Blood Type:</label>
          <select value={bloodType} onChange={(e) => setBloodType(e.target.value)} required>
            <option value="">Select Blood Type</option>
            <option value="A+">A+</option>
            <option value="B+">B+</option>
            <option value="O+">O+</option>
            <option value="A-">A-</option>
            <option value="B-">B-</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>
        <div className="form-group">
          <label>Quantity:</label>
          <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <button type="submit" className="submit-btn">Submit Request</button>
      </form>
    </div>
  );
};

export default Form;