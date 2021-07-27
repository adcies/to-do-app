const defaultValues = {
  isEditEnabled: false,
  id: null,
  taskData: {},
};

const editReducer = (state = defaultValues, action) => {
  switch (action.type) {
    case 'ENABLE_EDIT':
      const { task, date, priority, id } = action.payload;

      const taskData = {
        task,
        date,
        priority,
      };
      return {
        isEditEnabled: true,
        id,
        taskData,
      };
    case 'DISABLE_EDIT':
      return defaultValues;
    default:
      return state;
  }
};

export default editReducer;
