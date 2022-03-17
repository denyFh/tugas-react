// import './App.css';
import Todo from './components/Todo/Todo';


function App(props) {
  const taskData = props.tasks.map(task => (
    <Todo id={task.id} title={task.title} completed={task.completed} key={task.id} />
  ));
  console.log(props.tasks);
  return (
    <div className="App">
      <h1>To Do App</h1>
      <hr />
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskData}
      </ul>
    </div>
  );
}

export default App;
