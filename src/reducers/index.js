import { combineReducers } from 'redux';
import tasks from './tasks';
import authentications from './authentications';
import user from './user';
import menu from './menu';
const myReducer = combineReducers({
    tasks,
    authentications,
    user,
    menu
}); 

export default myReducer;