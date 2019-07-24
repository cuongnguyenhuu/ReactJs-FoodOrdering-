import { combineReducers } from 'redux';
import tasks from './tasks';
import authentications from './authentications';
const myReducer = combineReducers({
    tasks,
    authentications
}); 

export default myReducer;