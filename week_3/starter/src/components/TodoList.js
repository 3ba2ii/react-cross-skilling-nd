import Priority from '../constants/priority';
import '../styles/todo.css';
import TodoItem from './TodoItem';

const TodoList = ({
  setTodos,
  todos,
  toggleTodo,
  handleDeleteTodo,
  editTodoTitle,
}) => {
  return (
    <section className='todo-section-container'>
      <div className='todo-lists-container'>
        {Object.keys(Priority).map((priority) => (
          <ul key={priority} className='todo-list-container'>
            <h4>{priority}</h4>
            {todos
              .filter((todo) => todo.priority === priority)
              .map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  toggleTodo={toggleTodo}
                  handleDeleteTodo={handleDeleteTodo}
                  editTodoTitle={editTodoTitle}
                />
              ))}
          </ul>
        ))}
      </div>
    </section>
  );
};

export default TodoList;
