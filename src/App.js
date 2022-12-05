import './App.css';
import Tasks from './components/Tasks'

function App() {
  return (
    <div className="App">
      <div className='task-App-Container'>
        <div className='tasks-Main'>
          <h1>Mis tareas</h1>
          <Tasks 
          text='Aprender React'
          completed={true} />

        </div>
      </div>
    </div>
  );
}

export default App;
