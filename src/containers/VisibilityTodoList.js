import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { toggleTodo } from '../actions'
import { VisibilityFilters } from '../actions'

const filterTodos = (todos, filter) => {
  switch(filter){
    case VisibilityFilters.SHOW_ALL:
      console.log(filter);
      return todos;
    case VisibilityFilters.SHOW_ACTIVE:
      console.log(filter);
      return todos.filter( todo => !todo.completed);
    case VisibilityFilters.SHOW_COMPLETED:
      console.log(filter);
      return todos.filter( todo => todo.completed);
    default:
      throw new Error('invalid VIsibilityFilters:' + filter);
  }
}

const mapStateToProps = (state) => ({
  todos: filterTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: id => {
    console.log('DISPATCHER: here is to register about dispather');
    dispatch(toggleTodo(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);