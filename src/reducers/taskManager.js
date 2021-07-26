const taskReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'DELETE':
      return state;
    case 'EDIT':
      return state;
    default:
      return state;
  }
};

export default taskReducer;
