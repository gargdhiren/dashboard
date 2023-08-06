// RejectedRequests.js

import React, { useState, useEffect } from 'react';
import Axios from 'axios';


const RejectedRequests = () => {
  const [rejectedRequests, setRejectedRequests] = useState([]);

  useEffect(() => {
    fetchRejectedRequests();
  }, []);

  const fetchRejectedRequests = () => {
    Axios.get('http://localhost:3001/getRejected')
      .then((response) => {
        setRejectedRequests(response.data);
      })
      .catch((error) => {
        console.log('Error fetching rejected requests:', error);
      });
  };

  return (
    <div className="rejected-requests">
      <h2>Rejected Requests</h2>
      {rejectedRequests.length === 0 ? (
        <p>No rejected requests.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Request Type</th>
              <th>Blood Type</th>
              <th>Quantity</th>
              <th>Name</th>
              <th>Email</th>
              <th>Requested At</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {rejectedRequests.map((request) => (
              <tr key={request._id}>
                <td>{request.requestType}</td>
                <td>{request.bloodType}</td>
                <td>{request.quantity}</td>
                <td>{request.name}</td>
                <td>{request.email}</td>
                <td>{new Date(request.requestedAt).toLocaleString()}</td>
                <td>{request.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default RejectedRequests;
