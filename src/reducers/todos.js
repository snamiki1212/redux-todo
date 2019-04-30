const initialTodos = [
  {id: 1, text: 'Buy Milk', completed: false},
  {id: 2, text: 'Read README', completed: false},
  {id: 3, text: 'Write Blog', completed: false}
];

const todos = (state = initialTodos, action) => {
  switch(action.type){
    case 'TOGGLE_TODO':
      console.log('REDUCER: here is toggle-todo reducer');
      
      return state.map(ele => {
        if(ele.id === action.id){
          return {...ele, completed: !ele.completed};
        }
        return ele
      });
    case 'ADD_TODO':
      console.log('REDUCER: add-todo');
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    default:
      console.log('REDUCER: here is default reducer');
      return state;
  }
}

export default todos;