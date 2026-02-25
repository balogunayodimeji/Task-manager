
import './App.css';
import { TaskProvider } from './components/TaskContext';
import TaskInput from './components/taskpage/TaskInput';
import TaskList from './components/taskpage/TaskList';



function App() {
 

  return (

    <TaskProvider>
    <div className="App">
      <h1>Task Manager</h1>
      <TaskInput />
      <TaskList />
    </div>
    </TaskProvider>
  )
}

export default App;
