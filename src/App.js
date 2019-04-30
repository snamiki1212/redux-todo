import React from 'react';
import './App.css';
import AddTodo from './containers/AddTodo';
import VisibilityTodoList from './containers/VisibilityTodoList';
import Link from './components/Link';

function App() {
  return (
    <div className="App">
      test
      <AddTodo />
      <VisibilityTodoList />
      <Link />
    </div>
  );
}

export default App;
