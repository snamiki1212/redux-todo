import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { toggleTodo } from '../actions'

const mapStateToProps = (state) => ({
  todos: state.todos
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