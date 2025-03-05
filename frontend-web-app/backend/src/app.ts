import express from "express";
import cors from "cors";
import connectDB from "./config/database";
import recordRoutes from "./routes/recordRoutes";

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to Database
connectDB();

// Routes
app.use("/api/records", recordRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
