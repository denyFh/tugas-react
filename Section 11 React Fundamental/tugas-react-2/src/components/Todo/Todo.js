const Todo = (props) => {
    const taskCompleted = props.completed;
    return (
        <li className="todo stack-small">
          <div className="c-cb">
            <label className={`todo-label ${taskCompleted ? 'true' : '' }`} htmlFor={props.id}>
              {props.title}
            </label>
          </div>
        </li>
    );
}
 
export default Todo;