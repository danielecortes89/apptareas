import React from "react";
import TaskForm from "./TaskForm";
import '../stylesheets/TaskList.css'
import { useState } from "react";
import Tasks from "./Tasks";

function TaskList() {
  const [task, setTask] = useState([])

  return (
    <>
      <TaskForm/>
      <div className='task-list-container'>
        LISTA DE TAREAS
        {
          task.map(
            (taskElem) =>
            <Tasks
              text={taskElem.text}
              completed={taskElem.completed} 
            />
          )
        }


      </div>

    </>
  )

}

export default TaskList;