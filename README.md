# 🚀 Record Management System

This is a full-stack web application designed for managing records efficiently. The frontend is built with React (TypeScript) and styled with Tailwind CSS, providing a modern and responsive user interface. The backend utilizes Node.js, Express, and MongoDB for robust data management and API functionality.

## 🏗️ Project Structure

record-management-system/
├── frontend/    # React frontend
└── backend/     # Node.js backend


## 📌 Prerequisites

Before you begin, ensure you have the following installed:

-   **Node.js (v16 or later):** [Download Node.js](https://nodejs.org/)
-   **Git:** [Download Git](https://git-scm.com/)
-   **VS Code (Recommended):** [Download VS Code](https://code.visualstudio.com/)
-   **MongoDB Atlas:** [Sign up for MongoDB Atlas](https://www.mongodb.com/atlas/database) (for database setup)

## 🔧 Setup Instructions

Follow these steps to set up and run the project locally.

### 1️⃣ Clone the Repository

git clone <your-repository-url>
cd record-management-system

2️⃣ Backend Setup (Node.js + Express + MongoDB)
Bash

cd backend
npm install
Configure Environment Variables
Create a .env file in the backend folder and add your MongoDB connection string and port:

MONGODB_URI=your_mongodb_connection_string
PORT=8080
Replace your_mongodb_connection_string with your actual MongoDB Atlas connection string.

Start the Backend Server
Bash

npm run dev
The backend server will start on http://localhost:8080.

3️⃣ Frontend Setup (React + TypeScript)
Bash

cd ../frontend
npx create-react-app . --template typescript
npm install axios tailwindcss postcss autoprefixer
Configure Tailwind CSS
Generate the Tailwind CSS configuration file:

Bash

npx tailwindcss init -p
Modify tailwind.config.js to include your content paths:

JavaScript

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
Add Tailwind directives to src/index.css:

CSS

@tailwind base;
@tailwind components;
@tailwind utilities;
Configure Environment Variables
Create a .env file in the frontend folder and add the API base URL:

REACT_APP_API_BASE_URL=http://localhost:8080/api
Start the Frontend Server
Bash

npm start
The frontend application will start on http://localhost:3000.

📡 API Endpoints
The backend provides the following API endpoints:

Method	Endpoint	Description
GET	/api/records	Fetch all records from DB
POST	/api/records	Add a new record
PUT	/api/records/:id	Update a record
DELETE	/api/records/:id	Delete a record

Export to Sheets
🛠️ Running the Project
Open two terminal windows.

In the first terminal, start the backend:

Bash

cd backend
npm run dev
In the second terminal, start the frontend:

Bash

cd frontend
npm start
Open your browser and navigate to http://localhost:3000 to view the application.
