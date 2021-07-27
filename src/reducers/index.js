import taskReducer from './taskManager';
import editReducer from './editManager';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  tasks: taskReducer,
  edit: editReducer,
});

export default rootReducer;
