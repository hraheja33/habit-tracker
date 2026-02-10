import "./TaskSummary.css"

const TaskSummary = ({completedTask, totalTasks, completionPercentage}) => {
    return (
        <div className="stats-container">
            <div className="stats-text">
                <span>{completedTask} of {totalTasks} tasks completed</span>
                <span>{completionPercentage}%</span>
            </div>
            <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{width: `${completionPercentage}%`}}></div>
            </div>
        </div>
    )
}

export default TaskSummary;