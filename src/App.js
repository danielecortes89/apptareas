import './App.css';
import TaskList from './components/TaskList';

import Tasks from './components/Tasks'

function App() {
  return (
    <div className="App">
      <div className='task-App-Container'>
        <div className='tasks-Main'>
          <h1>Mis tareas</h1>
          
          <TaskList />
          

        </div>
      </div>
    </div>
  );
}

export default App;
