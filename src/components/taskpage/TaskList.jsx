import React, { useContext } from 'react'
import { MdDeleteOutline } from 'react-icons/md';
import { TaskContext } from '../TaskContext';
import './styling/TaskList.css';

const TaskList = () => {
    const { state, dispatch } = useContext(TaskContext);
    const { tasks } = state;

    const handleToggleComplete = (index) => {
        dispatch({ type: "TOGGLE_TASK", payload: index });
    };

    const handleDeleteTask = (index) => {
        dispatch({ type: "DELETE_TASK", payload: index });
    };

    return (
        <div className="task-list-container">
            {tasks.length === 0 ? (
                <p className="task-list-empty">No tasks yet. Add one to get started! 🎯</p>
            ) : (
                <ul className="task-list">
                    {[...tasks].reverse().map((task, reverseIndex) => {
                        const index = tasks.length - 1 - reverseIndex;
                        return (
                            <li key={index} className={`task-item ${task.completed ? 'completed' : ''}`}>
                                <input
                                    type="checkbox"
                                    className="task-item-checkbox"
                                    checked={task.completed}
                                    onChange={() => handleToggleComplete(index)}
                                    title="Mark task as complete"
                                />
                                <span className="task-item-text">{task.text}</span>
                                <button 
                                    className="task-item-delete-btn"
                                    onClick={() => handleDeleteTask(index)}
                                    title="Delete task"
                                >
                                    <MdDeleteOutline />
                                    <span>Delete</span>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    )
}

export default TaskList;