export const toggleTodo = id => {
  console.log('ACTION: here is action about toggle-todos');
  return {
  type: 'TOGGLE_TODO',
  id
  }
}

let nextTodoId = 4;
export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text,
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: "SET_VISIBILITY_FILTER",
    filter
  }
}