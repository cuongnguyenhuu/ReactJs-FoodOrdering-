import * as types from '../constants/ActionTypes';
var initialState=[];

const menuToday = (state = initialState, action) =>{
    console.log("CCC"+action.Menus);
    switch(action.type) {
        case types.GET_MENU_TODAY:
            // console.log(action.accessToken);
            state= action.Menus;
            return state;
        default: return state;
    }
};
export default menuToday;