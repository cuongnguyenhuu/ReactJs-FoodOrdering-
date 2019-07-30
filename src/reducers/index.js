import { combineReducers } from 'redux';
import tasks from './tasks';
import authentications from './authentications';
import user from './user';
import menu from './menu';
import menuToday from './menuToday';
const myReducer = combineReducers({
    tasks,
    authentications,
    user,
    menu,
    menuToday
}); 

export default myReducer;