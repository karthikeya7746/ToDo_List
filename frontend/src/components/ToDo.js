// ========================================
// 📁 ToDo.js – React Component to Display a Single Task (ToDo Item)
// ========================================

// 1️⃣ Import React (required to use JSX and components)
import React from 'react';

// 2️⃣ Import icons for edit and delete actions from react-icons library
import { BiEdit } from "react-icons/bi";       // 🖊️ Edit icon (Bi = BoxIcons)
import { AiFillDelete } from "react-icons/ai"; // 🗑️ Delete icon (Ai = Ant Design Icons)


// 3️⃣ Define a functional component named ToDo
// It takes 3 props:
// - text: the task to display
// - updateMode: function triggered when clicking edit
// - deleteToDo: function triggered when clicking delete
const ToDo = ({ text, updateMode, deleteToDo }) => {
  return (
    // A container div representing one todo item
    <div className='todo'>

      {/* Display the task text in a separate div */}
      <div className='text'>
        {text}
      </div>

      {/* Container for action icons */}
      <div className='icons'>

        {/* 🖊️ Edit icon - calls the function passed as updateMode prop */}
        <BiEdit className='icon' onClick={updateMode} />

        {/* 🗑️ Delete icon - calls the function passed as deleteToDo prop */}
        <AiFillDelete className='icon' onClick={deleteToDo} />
      </div>
    </div>
  );
};

// 4️⃣ Export the component so it can be used in other files (like App.js)
export default ToDo;
