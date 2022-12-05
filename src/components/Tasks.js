import '../stylesheets/tasks.css'  
import { AiOutlineCloseCircle } from "react-icons/ai"; 

function Tasks( { text, completed } ) {
    return(
        <div className={completed ? 'task-container completed' : 'task-container'}>
            <div className="task-text">
                {text}
            </div>
            <div className="task-container-icons">
                <AiOutlineCloseCircle className="task-icon"/>
            </div>
            
        </div>
    );
}

export default Tasks;