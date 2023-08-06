##Admin Dashboard

**Project: Blood Management System**

**Description:**
Blood Management System is a web application built using React and Node.js that allows users to manage blood inventory and requests for blood donation. The application provides an easy-to-use interface for administrators to track and manage blood inventory, as well as approve or reject donation requests from donors and recipients.

**Key Features:**
- Blood Inventory Management: Administrators can view, add, and update blood inventory, including blood type and quantity.
- Request Approval System: The system allows administrators to review and approve or reject donation requests from donors and recipients.
- Real-time Updates: Inventory and request statuses are updated in real-time to ensure accurate information and effective management.
- Dashboard Interface: A user-friendly dashboard layout enables easy navigation and organization of blood inventory and request data.

Brief Overview of the API:

The backend API is built using Node.js and Express, with a MongoDB database for data storage. It offers various endpoints to handle requests related to blood groups and user requests. Key API endpoints include:

GET /getInventory: Retrieves the current blood inventory from the database.

POST /createRequest: Creates a new blood request, allowing users to request a specific blood type and quantity.

GET /getPending: Fetches all pending requests for the admin dashboard, allowing administrators to manage and approve requests.

PUT /clearPending: Updates the status of a pending request to either "approved" or "rejected" based on admin action.

**Technologies Used:**
- Frontend: React, React Router, Axios, CSS
- Backend: Node.js, Express, MongoDB, Mongoose
- Database: MongoDB

**Outcome:**
The Blood Management System project showcased my proficiency in building full-stack web applications and implementing real-time features using React and Node.js. It provided a seamless user experience for managing blood inventory and donation requests. Additionally, I gained hands-on experience in handling user roles and implementing data-driven features with MongoDB as the database.

