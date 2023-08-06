# Blood Management System



## Description

Blood Management System is a web application built using React and Node.js that facilitates the efficient management of blood inventory and donation requests. The application provides a user-friendly interface for administrators to track blood inventory, review donation requests, and respond with approval or rejection.

## Key Features

1. **Blood Inventory Management:** Administrators can view, add, and update blood inventory, including blood type and quantity.

2. **Request Approval System:** The system allows administrators to review and approve or reject donation requests from donors and recipients.

3. **Real-time Updates:** Inventory and request statuses are updated in real-time to ensure accurate information and effective management.

4. **Dashboard Interface:** A user-friendly dashboard layout enables easy navigation and organization of blood inventory and request data.

## API Overview

The backend API is built using Node.js and Express, with a MongoDB database for data storage. It offers various endpoints to handle requests related to blood groups and user requests. Key API endpoints include:

- `GET /getInventory`: Retrieves the current blood inventory from the database.
- `POST /createRequest`: Creates a new blood request, allowing users to request a specific blood type and quantity.
- `GET /getPending`: Fetches all pending requests for the admin dashboard, allowing administrators to manage and approve requests.
- `PUT /clearPending`: Updates the status of a pending request to either "approved" or "rejected" based on admin action.

## Technologies Used

**Frontend:** React, React Router, Axios, CSS  
**Backend:** Node.js, Express, MongoDB, Mongoose  
**Database:** MongoDB

## Outcome

The Blood Management System project showcased my proficiency in building full-stack web applications and implementing real-time features using React and Node.js. It provided a seamless user experience for managing blood inventory and donation requests. Additionally, I gained hands-on experience in implementing data-driven features with MongoDB as the database.

## Working Screenshots
![image](https://github.com/gargdhiren/dashboard/assets/87688466/76772e80-5e81-43d6-831b-fe64b65fec90)
![image](https://github.com/gargdhiren/dashboard/assets/87688466/80230b38-90b5-483c-92a6-eca9f01cb9d1)
![image](https://github.com/gargdhiren/dashboard/assets/87688466/6f854db5-7b9d-44f7-b685-f12247b59557)


## How to Run

1. Clone the repository to your local machine.
2. Navigate to the project directory in the terminal.
3. Run `npm install` to install the required dependencies.
4. Create a `.env` file in the root directory and add your MongoDB connection string.
5. Run `npm start` to start the development server.
6. Access the application at `http://localhost:3000` in your web browser.

Feel free to explore and manage the blood inventory and donation requests with the user-friendly interface of the Blood Management System.
