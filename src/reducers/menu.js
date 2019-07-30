import * as types from '../constants/ActionTypes';
var initialState=[];

const menu = (state = initialState, action) =>{
    console.log("CCC"+action.allMenu);
    switch(action.type) {
        case types.GET_ALL_MENU:
            // console.log(action.accessToken);
            state= action.allMenu;
            return [...state];
        default: return [...state];
    }
};
export default menu;