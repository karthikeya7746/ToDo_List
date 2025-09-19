// ========================================
// 📁 ToDoModel.js – Mongoose Schema and Model for ToDos
// ========================================

// Import mongoose to define a schema and interact with MongoDB
const mongoose = require('mongoose');

// Define the schema structure for each ToDo document
const todoSchema = new mongoose.Schema({
    text: {
        type: String,       // The task text should be a string
        required: true      // This field is mandatory; cannot be empty
    }
});

// Export the model so other files (like controllers) can use it
// MongoDB will use the model name 'ToDo' to create a collection called 'todos'
module.exports = mongoose.model('ToDo', todoSchema);
