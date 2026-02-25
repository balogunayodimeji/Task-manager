// Import createContext and useReducer hooks from React library
// createContext: Creates a new context object for global state management
// useReducer: Hook for managing complex state logic using a reducer function
import { createContext, useReducer }  from "react";

// Import the initial state structure and reducer function from TaskReducer
import { initialState, taskReducer } from "./TaskReducer";

// Create a new context object that will be used to provide state and dispatch throughout the app
export const TaskContext = createContext();

// Create a Provider component that wraps around parts of the app and provides access to the context
// {children}: Props passed from parent component - represents child components
export const TaskProvider = ({children}) => {

  // useReducer hook: Takes two arguments
  // - taskReducer: The reducer function that defines how state updates work
  // - initialState: Starting state value (empty task array)
  // Returns: [state, dispatch] - current state and function to trigger state updates
  const [state, dispatch] = useReducer(taskReducer, initialState)
  
    return (
        // Wrap children with TaskContext.Provider to make state and dispatch available to all child components
        // value={{state, dispatch}}: Passes both state (current data) and dispatch (function to update state)
        <TaskContext.Provider value={{state, dispatch}}>  
            {children}
        </TaskContext.Provider>
    )
};