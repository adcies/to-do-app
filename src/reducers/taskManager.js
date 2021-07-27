const taskReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'DELETE':
      return state.filter((item) => item.id !== action.payload);
    case 'EDIT':
      const { task, id, date, priority } = action.payload;
      const tasks = [...state];
      const itemIndex = tasks.findIndex((task) => task.id === id);
      tasks[itemIndex] = { ...tasks[itemIndex], task, date, priority };
      return tasks;
    default:
      return state;
  }
};

export default taskReducer;
