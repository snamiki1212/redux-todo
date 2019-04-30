const todos = (state = [
  {id: 1, text: 'this is text a', completed: false},
  {id: 2, text: 'this is text b', completed: false},
  {id: 3, text: 'this is text c', completed: false}
], action) => {
  switch(action.type){
    case 'TOGGLE_TODO':
      console.log('REDUCER: here is toggle-todo reducer');
      
      let o;
      console.dir(state);
      console.dir(action);
      return state.map(ele => {
        if(ele.id === action.id){
          o = {...ele, completed: !ele.completed}
          console.log(o);
          return o;
        }
        return ele
      });
    default:
      console.log('REDUCER: here is default reducer');
      console.dir(action);
      return state;
  }
}

export default todos;