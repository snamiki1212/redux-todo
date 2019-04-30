import React from 'react';
import Todo from '../components/Todo';

const TodoList = () => {
  const l = ['a', 'b', 'c'];

  return(
    <ul>
      {l.map(x => <Todo text={x} />)}
    </ul>
  );
}

export default TodoList;