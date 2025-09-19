// ========================================
// 📁 HandleApi.js – API calls to the backend using Axios
// ========================================

import axios from 'axios';

// Base URL for all API calls
const baseUrl = "http://localhost:5000";

// GET: Fetch all todos
const getAllToDo = (setToDo) => {
  axios
    .get(baseUrl)
    .then(({ data }) => {
      console.log('GET / ->', data);
      setToDo(data); // Update state with fetched todos
    })
    .catch((err) => console.log("Fetch error:", err));
};

// POST: Add a new todo
const addToDo = (text, setText, setToDo) => {
  axios
    .post(`${baseUrl}/save`, { text })
    .then(() => {
      setText("");           // Clear input
      getAllToDo(setToDo);   // Refresh the list
    })
    .catch((err) => console.log("Add error:", err));
};

// POST: Update an existing todo
const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
  axios
    .post(`${baseUrl}/update`, { _id: toDoId, text })
    .then(() => {
      setText("");           // Clear input
      setIsUpdating(false);  // Exit update mode
      getAllToDo(setToDo);   // Refresh the list
    })
    .catch((err) => console.log("Update error:", err));
};

// POST: Delete a todo
const deleteToDo = (_id, setToDo) => {
  axios
    .post(`${baseUrl}/delete`, { _id })
    .then(() => getAllToDo(setToDo)) // Refresh after deletion
    .catch((err) => console.log("Delete error:", err));
};

// Export all functions so you can import them in App.js
export { getAllToDo, addToDo, updateToDo, deleteToDo };
