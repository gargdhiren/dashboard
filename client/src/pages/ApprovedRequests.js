
import React, { useState, useEffect } from 'react';
import Axios from 'axios';


const ApprovedRequests = () => {
  const [approvedRequests, setApprovedRequests] = useState([]);

  useEffect(() => {
    fetchApprovedRequests();
  }, []);

  const fetchApprovedRequests = () => {
    Axios.get('http://localhost:3001/getApproved')
      .then((response) => {
        setApprovedRequests(response.data);
      })
      .catch((error) => {
        console.log('Error fetching approved requests:', error);
      });
  };

  return (
    <div className="approved-requests">
      <h2>Approved Requests</h2>
      {approvedRequests.length === 0 ? (
        <p>No approved requests.</p>
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
            {approvedRequests.map((request) => (
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

export default ApprovedRequests;