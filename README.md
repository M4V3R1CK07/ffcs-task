🚀 Project Overview

This is a full-stack web application for managing records. The frontend is built with React (TypeScript) + Tailwind CSS, while the backend is developed using Node.js, Express, and MongoDB.

🏗️ Project Structure

record-management-system/
│-- frontend/    # React frontend
│-- backend/     # Node.js backend

📌 Prerequisites

Make sure you have the following installed before proceeding:

Node.js (v16 or later)

Git

VS Code (recommended)

MongoDB Atlas (for database setup)

🔧 Setup Instructions

1️⃣ Clone the Repository

git clone <your-repository-url>
cd record-management-system

2️⃣ Backend Setup (Node.js + Express + MongoDB)

cd backend
npm install

Configure Environment Variables

Create a .env file in the backend folder and add:

MONGODB_URI=your_mongodb_connection_string
PORT=8080

Start the Backend Server

npm run dev

3️⃣ Frontend Setup (React + TypeScript)

cd ../frontend
npx create-react-app . --template typescript
npm install axios tailwindcss postcss autoprefixer

Configure Tailwind CSS

Generate the config file:

npx tailwindcss init -p

Modify tailwind.config.js:

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

Add Tailwind directives to src/index.css:

@tailwind base;
@tailwind components;
@tailwind utilities;

Configure Environment Variables

Create a .env file in the frontend folder and add:

REACT_APP_API_BASE_URL=http://localhost:8080/api

Start the Frontend Server

npm start

📡 API Endpoints

Method

Endpoint

Description

GET

/api/records

Fetch all records from DB

POST

/api/records

Add a new record

PUT

/api/records/:id

Update a record

DELETE

/api/records/:id

Delete a record

🛠 Running the Project

Open two terminal windows:
1️⃣ Backend

cd backend
npm run dev

2️⃣ Frontend

cd frontend
npm start

The application should now be running on http://localhost:3000 🚀.
