const visibilityFilter = (state = [], action) => {
  switch(action.type){
    case 'SET_VISIBILITY_FILTER':
      console.log('qwer222');
      return action.filter;
    default :
      return state;
  }
}

export default visibilityFilter;