import { useEffect, useState } from 'react'
import './App.css'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList';
import FilterBar from './components/FIlter';
import TaskSummary from "./components/TaskSummary"

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("my_Tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const totalTasks = tasks.length;
  const completedTask = tasks.filter(task => task.isCompleted).length;
  const completionPercentage = totalTasks > 0 ? Math.round((completedTask / totalTasks) * 100) : 0;

  useEffect(() => {
    localStorage.setItem("my_Tasks", JSON.stringify(tasks))
  }, [tasks]);


  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  const toggleStatus = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, isCompleted: !task.isCompleted} : task));
  }

  const [searchTerm,setSearchTerm] = useState("");
  const [filterPriority, setFilterPriority] = useState("All");
  
  const handlesearchTerm = (value) => {
    setSearchTerm(value);
  }

  const handlePriority = value => {
    setFilterPriority(value);
  }

  const filteredTask = tasks.filter(task => {
    const matchesSearch = task.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPriority = filterPriority === "All" || task.priority === filterPriority;

    return matchesSearch && matchesPriority;
  })

  return (
    <div className='App'>
      <h1>Smart Habit Tracker</h1>
      <TaskSummary 
        totalTasks={totalTasks}
        completedTask={completedTask}
        completionPercentage={completionPercentage}  
      />
      <AddTask onAddTask={handleAddTask}/>
      <FilterBar searchTerm={handlesearchTerm} filterPriority={handlePriority}/>
      <TaskList tasks={filteredTask} deleteTask={deleteTask} toggleStatus={toggleStatus}/>
    </div>
)}

export default App
