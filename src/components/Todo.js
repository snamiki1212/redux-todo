import React from 'react';
// import PropTypes from 'prop-types';

const Todo = ({ text, completed, onClick }) => {
  return (
    <li
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
      onClick={onClick}
    >
    {text}
    </li>
  )
}

export default Todo;