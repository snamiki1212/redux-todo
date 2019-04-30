import React from 'react';
import Todo from '../components/Todo';

const TodoList = ({ todos, toggleTodo }) => {
  console.dir(todos);
  return(
    <ul>
      {todos.map(x =>
        <Todo
          key={x.id}
          text={x.text}
          onClick={() => toggleTodo(x.id)}
          completed={x.completed}
        />
      )}
    </ul>
  );
}

export default TodoList;