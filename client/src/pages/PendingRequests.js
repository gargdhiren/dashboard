// PendingRequests.js

import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const PendingRequests = () => {
  const [pendingRequests, setPendingRequests] = useState([]);
  useEffect(() => {
    fetchBloodGroups();
    fetchPendingRequests();
  }, []);
  const [bloodgroups, setBloodgroups] = useState([]);
  const fetchBloodGroups = () => {
      Axios.get("http://localhost:3001/getInventory")
      .then((response) => {
          setBloodgroups(response.data);
      })
      .catch((error) => {
          console.log("Error fetching data:", error.message);
      });
  };
  const fetchPendingRequests = () => {
    Axios.get('http://localhost:3001/getPending')
      .then((response) => {
        setPendingRequests(response.data);
      })
      .catch((error) => {
        console.log('Error fetching pending requests:', error);
      });
  };

  const handleApprove = (requestId) => {
    Axios.put('http://localhost:3001/clearPending',{id:requestId,status:'approved'})
      .then(() => {
        console.log('Request approved.');
        fetchPendingRequests();
      })
      .catch((error) => {
        console.log('Error approving request:', error);
      });
  };

  const handleReject = (requestId) => {
    Axios.put('http://localhost:3001/clearPending',{id:requestId,status:'rejected'})
      .then(() => {
        console.log('Request rejected.');
        fetchPendingRequests();
      })
      .catch((error) => {
        console.log('Error rejecting request:', error);
      });
  };
  const isApproveButtonVisible = (bloodType,quantity) => {
    const bloodGroup = bloodgroups.find((group) => group.bloodType === bloodType);
    if (bloodGroup) {
      return bloodGroup.quantity >=quantity;
    }
    return false;
  };
  return (
    <div className="pending-requests">
      <h2>Pending Requests</h2>
      {pendingRequests.length === 0 ? (
        <p>No pending requests.</p>
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pendingRequests.map((request) => (
              <tr key={request._id}>
                <td>{request.requestType}</td>
                <td>{request.bloodType}</td>
                <td>{request.quantity}</td>
                <td>{request.name}</td>
                <td>{request.email}</td>
                <td>{new Date(request.requestedAt).toLocaleString()}</td>
                <td>
                  {isApproveButtonVisible(request.bloodType,request.quantity) && <button onClick={() => handleApprove(request._id)}>Approve</button>}
                  <button onClick={() => handleReject(request._id)}>Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PendingRequests;
