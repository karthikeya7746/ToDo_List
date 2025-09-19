// ========================================
// 📁 ToDoRoute.js – Defines API Endpoints for the ToDo App
// ========================================

// 1️⃣ Import the Router constructor from Express
// This allows us to define API routes separately and keep code modular
const { Router } = require("express");

// 2️⃣ Import controller functions from the controller file
// These functions actually handle the logic behind each route
const {
  getToDo,     // Handles retrieving all todos
  saveToDo,    // Handles creating a new todo
  updateToDo,  // Handles updating an existing todo
  deleteToDo   // Handles deleting a todo
} = require("../controllers/ToDoController");

// 3️⃣ Create a router instance
// This router will act like a mini Express app where we can define specific routes
const router = Router();

// ========================================
// 4️⃣ Define Routes and Attach Controllers
// ========================================

// GET '/' – Fetch all todo items
// Example: axios.get("http://localhost:5000/")
router.get('/', getToDo);

// POST '/save' – Add a new todo
// Example: axios.post("http://localhost:5000/save", { text: "Buy milk" })
router.post('/save', saveToDo);

// POST '/update' – Update an existing todo
// Example: axios.post("http://localhost:5000/update", { _id: "123", text: "Updated Task" })
router.post('/update', updateToDo);

// POST '/delete' – Delete a todo by ID
// Example: axios.post("http://localhost:5000/delete", { _id: "123" })
router.post('/delete', deleteToDo);

// ========================================
// 5️⃣ Export the Router
// This makes the router accessible to Server.js, where it will be used via app.use()
// ========================================
module.exports = router;
