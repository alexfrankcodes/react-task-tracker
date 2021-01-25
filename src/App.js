import { useState } from "react";

import Header from './components/Header.js'
import Tasks from './components/Tasks.js'
import AddTask from './components/AddTask.js'

import { v4 as uuidv4 } from 'uuid';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      text: "Finish coding interview prep",
      day: "Feb 4th at 4:30pm",
      reminder: true,
    },
    {
      id: uuidv4(),
      text: "Make dentist appointment",
      reminder: false,
    },
  ]);

  const addTask = (task) => {
    const newTask = {
      id: uuidv4(),
      ...task
    }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  } 

  const toggleReminder = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
     <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
     {showAddTask && <AddTask onAdd={addTask}/>}
     {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'You currently have no tasks.'}
    
    </div>
  );
}

export default App;
