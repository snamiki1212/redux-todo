import React from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      test
      <Todo text="this is text" />
      <TodoList />
    </div>
  );
}

export default App;
