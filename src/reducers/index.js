import taskReducer from './taskManager';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  tasks: taskReducer,
});

export default rootReducer;
