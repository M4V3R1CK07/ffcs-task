# 🚀 Project Overview

This is a full-stack web application for managing records. The frontend is built with **React (TypeScript)** and **Tailwind CSS**, while the backend is developed using **Node.js**, **Express**, and **MongoDB**.

---

## 🏗️ Project Structure

```plaintext
record-management-system/
│-- frontend/    # React frontend
│-- backend/     # Node.js backend
```

---

## 📌 Prerequisites

Ensure you have the following installed before proceeding:

- **Node.js** (v16 or later)
- **Git**
- **VS Code** (recommended)
- **MongoDB Atlas** (for database setup)

---

## 🔧 Setup Instructions

### 1️⃣ Clone the Repository

To start, clone the repository and navigate into the project directory:

```bash
git clone 
cd record-management-system
```

---

### 2️⃣ Backend Setup (Node.js + Express + MongoDB)

1. Navigate to the backend folder:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file in the `backend` folder and add:

     ```makefile
     MONGODB_URI=your_mongodb_connection_string
     PORT=8080
     ```

4. Start the backend server:

   ```bash
   npm run dev
   ```

---

### 3️⃣ Frontend Setup (React + TypeScript)

1. Navigate to the frontend folder:

   ```bash
   cd ../frontend
   ```

2. Initialize the React project with TypeScript:

   ```bash
   npx create-react-app . --template typescript
   ```

3. Install required dependencies:

   ```bash
   npm install axios tailwindcss postcss autoprefixer
   ```

4. Configure Tailwind CSS:
   - Generate the Tailwind configuration file:

     ```bash
     npx tailwindcss init -p
     ```

   - Update `tailwind.config.js`:

     ```javascript
     module.exports = {
       content: [
         "./src/**/*.{js,jsx,ts,tsx}"
       ],
       theme: {
         extend: {},
       },
       plugins: [],
     };
     ```

   - Add Tailwind directives to `src/index.css`:

     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

5. Configure environment variables:
   - Create a `.env` file in the `frontend` folder and add:

     ```makefile
     REACT_APP_API_BASE_URL=http://localhost:8080/api
     ```

6. Start the frontend server:

   ```bash
   npm start
   ```

---

## 📡 API Endpoints

| Method | Endpoint          | Description             |
|--------|--------------------|-------------------------|
| GET    | `/api/records`     | Fetch all records from DB |
| POST   | `/api/records`     | Add a new record        |
| PUT    | `/api/records/:id` | Update a record         |
| DELETE | `/api/records/:id` | Delete a record         |

---

## 🛠 Running the Project

Open two terminal windows and follow these steps:

1️⃣ **Backend**  
```bash
cd backend  
npm run dev  
```

2️⃣ **Frontend**  
```bash
cd frontend  
npm start  
```

The application should now be running on [http://localhost:3000](http://localhost:3000) 🚀.

---
