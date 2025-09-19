// Importing Express - a minimal web framework for Node.js
const express = require("express");

// Importing Mongoose - an ODM that helps interact with MongoDB easily
const mongoose = require("mongoose");

// Importing CORS middleware to handle cross-origin requests
const cors = require("cors");

// Importing the custom-defined routes from the routes folder
const routes = require("./routes/ToDoRoute");

// Loads environment variables from a .env file into process.env
require("dotenv").config();


// Create an instance of an Express application
const app = express();

// Set the port to use from .env or default to 5000
const PORT = process.env.PORT || 5000;


// Connect to MongoDB using Mongoose
mongoose
  .connect(process.env.MONGODB_URL) // Get the MongoDB URL from .env
  .then(() => console.log("✅ Connected To MongoDB..."))
  .catch((err) => console.log("❌ MongoDB Connection Error:", err));


// Add middleware

// Allow cross-origin requests (e.g., from React frontend running on localhost:3000)
app.use(cors());

// Parse incoming request bodies as JSON (required for POST, PUT, etc.)
app.use(express.json());


// Attach your API routes to the root path "/"
// So endpoints like '/', '/save', '/update' will be handled by ToDoRoute.js
app.use("/", routes);


// Start the Express server on the defined port
app.listen(PORT, () => console.log(`🚀 Server is listening on: http://localhost:${PORT}`));
