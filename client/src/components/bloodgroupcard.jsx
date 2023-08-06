import React from 'react';

const BloodGroupCard = ({ bloodType, quantity }) => {
  return (
    <div className="blood-group-card">
      <h3>{bloodType}</h3>
      <p>Quantity(in ml): {quantity}</p>
    </div>
  );
};

export default BloodGroupCard;