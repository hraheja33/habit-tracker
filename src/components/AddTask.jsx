import { useState } from "react";
import "./AddTask.css";
const AddTask = ({onAddTask}) => {
    const [task, setTask] = useState({
        name: '',
        priority: ''
    });

    const handleChange = e => {
        const {name, value} = e.target;
        setTask((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!task.name) return;

        const newTask = {
            ...task,
            id: Date.now(),
            description: "",
            status: "Pending",
            isCompleted: false,
            createdAt: new Date().toLocaleString(),
            lastUpdated: new Date().toLocaleString()
        }
        onAddTask(newTask);
        setTask({name: "", priority: ""});
    }

    // style={{border: '1px solid #ccc', padding: '1rem', marginBottom:'1rem'}}

    return (
        <form className="add-task-form" onSubmit={handleSubmit} autoComplete="off">
            <div className="form-group">
                <label>Task Name: </label>
                <input 
                    autoFocus
                    type="text" 
                    name="name" 
                    value={task.name}
                    onChange={handleChange} 
                />
                </div>
            <div className="form-group">
                <label>Priority : </label>
                <select name="priority" value={task.priority} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="High">High 🔥</option>
                    <option value="Medium">Medium ⚡️</option>
                    <option value="Low">Low 🟢</option>
                </select>
            </div>
            <button type="submit" className="submit-btn">+</button>
        </form>
    )
}

export default AddTask;