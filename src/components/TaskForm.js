import '../stylesheets/TaskForm.css'

const TaskForm = (props) => {
    return (
        <form className="task-form">
            <input 
              className="task-input"
              type='text'
              placeholder="Escribe una tarea"
              name='text'

            />
            <button className='task-button'>
              Agregar tarea
            </button>

        </form>

    )
}

export default TaskForm;