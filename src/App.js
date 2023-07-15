import React from 'react';
import './App.css';
// import InputForm from './components/InputForm';
// import CardComponent from './components/CardComponent';
import TodoApp from './components/TodoApp';

function App() {
  // const [tasks, setTasks] = useState([]);

  // const addTask = (task) => {
  //   setTasks((prevTask) => [...prevTask, task]);
  // }

  return (
    <div className="container">
      {/* <InputForm addTask={addTask} />
      <div className="list-container">
        {
          tasks.map((task, index) => (
            <CardComponent task={task} key={index} />
          ))
        }
      </div> */}
      <TodoApp />
    </div>

  );
}

export default App;




