import React from 'react';
import './App.css';
import AddTodo from './containers/AddTodo';
import VisibilityTodoList from './containers/VisibilityTodoList';
import FilterLink from './containers/FilterLink';

function App() {
  return (
    <div className="App">
      test
      <AddTodo />
      <VisibilityTodoList />
      <FilterLink />
    </div>
  );
}

export default App;
