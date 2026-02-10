import { useState } from "react";
import "../App.css";
import "./AddTask.css";
const FilterBar = ({searchTerm, filterPriority}) => {
    
    const [input, setInput] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setInput(value);
        searchTerm(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
            <form className="add-task-form filter-bar" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" value={input} onChange={handleChange} placeholder="Search task here..."/>
                </div>
                <div className="form-group">
                    <select onChange={e => filterPriority(e.target.value)}>
                        <option value="All">All</option>
                        <option value="High">High 🔥</option>
                        <option value="Medium">Medium ⚡️</option>
                        <option value="Low">Low 🟢</option>
                    </select>
                </div>
            </form>
    )
}
export default FilterBar;