import React from 'react';
import './App.css';
import AddTodo from './containers/AddTodo';
import VisibilityTodoList from './containers/VisibilityTodoList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      test
      <AddTodo />
      <VisibilityTodoList />
      <Footer />
    </div>
  );
}

export default App;
