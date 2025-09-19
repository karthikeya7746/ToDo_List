// ========================================
// 📁 ToDoController.js – Handles logic for each ToDo API endpoint
// ========================================

// 1️⃣ Import the Mongoose model representing the "todos" collection in MongoDB
const ToDoModel = require('../models/ToDoModel');


// ========================================
// 2️⃣ Controller: Get all ToDos
// Method: GET '/'
// ========================================
module.exports.getToDo = async (req, res) => {
    // Use Mongoose's find() to retrieve all documents in the collection
    const toDo = await ToDoModel.find();
    
    // Send the result back to the client (usually as an array of todos)
    res.send(toDo);
};


// ========================================
// 3️⃣ Controller: Save a New ToDo
// Method: POST '/save'
// ========================================
module.exports.saveToDo = async (req, res) => {
    // Destructure the 'text' field from the JSON body sent by the client
    const { text } = req.body;

    // Create and save the new todo item using Mongoose's create()
    ToDoModel
        .create({ text })
        .then((data) => {
            console.log("✅ Added Successfully..");
            console.log(data); // Logs the saved document
            res.send(data);    // Sends back the saved document as response
        });
};


// ========================================
// 4️⃣ Controller: Update an Existing ToDo
// Method: POST '/update'
// ========================================
module.exports.updateToDo = async (req, res) => {
    const { _id, text } = req.body;

    // Use findByIdAndUpdate to update the todo document by ID
    ToDoModel
        .findByIdAndUpdate(_id, { text }) // Overwrites old text with new one
        .then(() => res.send("✅ Updated Successfully...."))
        .catch((err) => console.log("❌ Update Error:", err));
};


// ========================================
// 5️⃣ Controller: Delete a ToDo by ID
// Method: POST '/delete'
// ========================================
module.exports.deleteToDo = async (req, res) => {
    const { _id } = req.body;

    // Use findByIdAndDelete to remove the document from MongoDB
    ToDoModel
        .findByIdAndDelete(_id)
        .then(() => res.send("🗑️ Deleted Successfully...."))
        .catch((err) => console.log("❌ Delete Error:", err));
};
