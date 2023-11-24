import { useEffect, useState } from 'react';
import './App.css';
import TodoForm from './todos/TodoForm';
import TodoList from './todos/TodoList';
import { v4 as uuidv4 } from 'uuid';
import TodoActions from './todos/TodoActions';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );
  };

  const ResetAllTodoHandler = () => {
    setTodos([]);
  };
  const ResetCompletedTodoHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className="App">
      <header>
        <h1>Daily Todo app</h1>
      </header>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodoActions
          completedTodosCount={!!completedTodosCount}
          reset={ResetAllTodoHandler}
          ResetCompletedTodoHandler={ResetCompletedTodoHandler}
        />
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {completedTodosCount > 0 && (
        <h2>{`You have completed ${completedTodosCount} ${
          completedTodosCount > 1 ? 'todos' : 'todo'
        }`}</h2>
      )}
      <h4>Captain Jack, Beijing, 2023</h4>
    </div>
  );
}

export default App;
