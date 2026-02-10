import DeleteButton from "./DeleteButton";
import ToggleButton from "./Toggle";
import "../App.css";

const TaskList = ({tasks,deleteTask, toggleStatus}) => {  
    
    if(!tasks || tasks.length === 0){
        return <p>Clear skies! No tasks found. 🌤️</p>
    }
    
    return (
            <ul>
                {tasks.map((task) => {
                    return (
                    <li key={task.id} data-priority={task.priority} id={task.id} 
                        style={
                            {marginBottom: '10px', 
                            textDecoration: task.isCompleted ? 'line-through' : 'none', 
                            opacity: task.isCompleted ? 0.6 : 1, 
                            paddingRight:'40px'}
                        }>
                        <strong>{task.name}</strong> -
                        <span>  Priority :  {task.priority}</span>
                        <DeleteButton id={task.id} onDelete={deleteTask} />
                        <ToggleButton id={task.id} toggle={toggleStatus}/>
                    </li>
                )})}
            </ul>            
)}

export default TaskList;