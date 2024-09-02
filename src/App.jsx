// ***  EXAMPLES OF useState  ********************************************************************************************

// // Import the useState hook from the React library
// import { useState } from "react";

// // Define the App component
// function App() {
//   // Initialize the state variable 'num' with an initial value of 0
//   const [num, setNum] = useState(0);

//   // Define a function to increment the counter
//   const addCounter = () => {
//     // Update the state variable 'num' by adding 1 to its current value
//     setNum(num + 1);
//   };

//   // Define a function to decrement the counter
//   const lessCounter = () => {
//     // Check if the current value of 'num' is less than 1
//     if (num < 1) {
//       // If true, log a message to the console and exit the function
//       console.log("Dont do set num work here");
//       return;
//     }
//     // Update the state variable 'num' by subtracting 1 from its current value
//     setNum(num - 1);
//   };

//   // Return the JSX elements that make up the App component
//   return (
//     <>
//       {/* Display the current value of 'num' */}
//       <h1>Hello world {num}</h1>
//       {/* Button to increment the counter */}
//       <button onClick={addCounter}>add {num}</button>
//       {/* Button to decrement the counter */}
//       <button onClick={lessCounter}>less {num}</button>
//     </>
//   );
// }

// // Export the App component as the default export
// export default App;

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Import React and its hooks
import React from "react";
import { useRef } from "react";
import { useState } from "react";

// Define the App component
const App = () => {
  // Initialize the todo state as an empty array
  const [todo, setTodo] = useState([]);

  // Create a reference to the input field
  const todoVal = useRef();

  // Define the addTodo function
  const addTodo = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the input value and trim any whitespace from both ends
    const todoValue = todoVal.current.value.trim();

    // Check if the input value is not empty
    if (todoValue !== "") {
      // Add the input value to the todo array
      setTodo([...todo, todoValue]);

      // Reset the input field value
      todoVal.current.value = "";
    }
  };

  // Define the deleteTodo function
  const deleteTodo = (index) => {
    console.log("todo Deleted", index);

    // Remove the todo item at the specified index
    todo.splice(index, 1);

    // Update the todo state
    setTodo([...todo]);
  };

  // Define the editTodo function
  const editTodo = (index) => {
    console.log("todo Edited", index);

    // Prompt the user to enter a new value
    const editedVal = prompt("Enter edited value");

    // Replace the todo item at the specified index with the new value
    todo.splice(index, 1, editedVal);

    // Update the todo state
    setTodo([...todo]);
  };

  // Render the Todo App component
  return (
    <>
      <h1>Todo App</h1>
      <form onSubmit={addTodo}>
        <input type="text" placeholder="Enter todo value" ref={todoVal} />
        <button type="submit">Add Todo</button>
      </form>
      <ol>
        {todo.length > 0 ? (
          todo.map((item, index) => {
            return (
              <div key={index}>
                <li>{item}</li>
                <button onClick={() => deleteTodo(index)}>Delete</button>
                <button onClick={() => editTodo(index)}>Edit</button>
              </div>
            );
          })
        ) : (
          <p>No Todo found</p>
        )}
      </ol>
    </>
  );
};

// Export the App component as the default export
export default App;
