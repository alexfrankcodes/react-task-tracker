import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <div className="info"> 
        <h2>{task.text}</h2>
        <p>{task.day}</p>
      </div>
      <FaTimes className="delete" style={{color:'red'}} onClick={()=> onDelete(task.id)}/>
    </div>
  );
};

export default Task;
