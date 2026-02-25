import { useState, useContext } from "react";
import { FiPlus } from "react-icons/fi";
import { TaskContext } from "../TaskContext";
import "./styling/TaskInput.css";


const TaskInput = () => {
    const [newTask, setNewTask] = useState("");
    const { dispatch } = useContext(TaskContext);

    const handleAddTask = () => {
        if (newTask.trim() !== "") {
            dispatch({ type: "ADD_TASK", payload: { text: newTask } });
            setNewTask("");
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddTask();
        }
    };

    return (
        <div className="task-input-container">
            <div className="task-input-wrapper">
                <input
                    type="text"
                    value={newTask}
                    onChange={(event) => setNewTask(event.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter a new task..."
                />
                <button className="add-task-btn" onClick={handleAddTask}>
                    <FiPlus />
                    <span>Add Task</span>
                </button>
            </div>
        </div>
    );
};

export default TaskInput;
