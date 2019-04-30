import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input;
  return(
    <form onSubmit={ e => {
      e.preventDefault();
      dispatch(addTodo(input.value))
      input.value = '';
    } }>
      <input ref={node => input = node} />
      <button type="submit">ADD_BUTTON</button>
    </form>
  );
};

export default connect()(AddTodo);