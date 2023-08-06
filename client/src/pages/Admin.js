import React from 'react'
import Axios from 'axios';
import {useState,useEffect} from 'react'
import BloodGroupCard from '../components/bloodgroupcard';
function Admin() {
    const [bloodgroups, setBloodgroups] = useState([]);
    const [bloodType, setBloodType] = useState('');
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        fetchBloodGroups();
    }, []);

    const fetchBloodGroups = () => {
        Axios.get("http://localhost:3001/getInventory")
        .then((response) => {
            setBloodgroups(response.data);
        })
        .catch((error) => {
            console.log("Error fetching data:", error.message);
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.put("http://localhost:3001/updateInventory", { bloodtype: bloodType, quantity: parseInt(quantity, 10) })
        .then(() => {
            console.log("Data updated successfully.");
            fetchBloodGroups(); // Refresh the data after update
        })
        .catch((err) => {
            console.log("Error updating data:", err);
        });
    };
  return (
    <div className="dashboard">
      <div className="blood-group-cards">
        {bloodgroups.map((bloodgroup) => (
          <BloodGroupCard
            key={bloodgroup._id}
            bloodType={bloodgroup.bloodType}
            quantity={bloodgroup.quantity}
          />
        ))}
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <select
            value={bloodType}
            onChange={(e) => setBloodType(e.target.value)}
            required
          >
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
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Enter Quantity"
            required
          />
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  )
}

export default Admin