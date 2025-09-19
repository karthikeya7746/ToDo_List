// ========================================
// 📁 App.js – Main React Component of the ToDo Frontend
// ========================================

import { useEffect, useState } from "react"; // React hooks for state and lifecycle
import ToDo from "./components/ToDo";        // Component to render individual todo items
import { getAllToDo, addToDo, updateToDo, deleteToDo } from "./utils/HandleApi"; // API functions to interact with backend
import ClickEvent from "./components/ClickEvent";

function App() {
  // State to hold the list of all todos fetched from the server
  const [toDo, setToDo] = useState([]);

  // State to hold the current input value in the input box
  const [text, setText] = useState("");

  // State to indicate whether we are currently editing an item
  const [isUpdating, setIsUpdating] = useState(false);

  // State to hold the ID of the todo being updated
  const [toDoId, setToDoId] = useState("");

  // useEffect runs when the component mounts (only once)
  useEffect(() => {
    getAllToDo(setToDo); // Fetch all todos and populate the state
  }, []);

  // Helper function that prepares the component to enter "update mode"
  const updateMode = (_id, text) => {
    setIsUpdating(true);  // Enable update mode
    setText(text);        // Fill input with existing text
    setToDoId(_id);       // Save which todo is being edited
  };

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>

        {/* Input and Add/Update button */}
        <div className="top">
          <input
            type="text"
            placeholder="Add ToDos..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div
            className="add"
            onClick={
              isUpdating
                ? () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
                : () => addToDo(text, setText, setToDo)
            }
          >
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>

        {/* Render the list of todos */}
        <div className="list">
          {toDo.map((item) => (
            <ToDo
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteToDo={() => deleteToDo(item._id, setToDo)}
            />
          ))}
        </div>
      </div>

      <ClickEvent />
    </div>
  );
}

export default App;
