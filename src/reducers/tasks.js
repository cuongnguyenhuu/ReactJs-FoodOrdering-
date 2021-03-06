import * as types from './../constants/ActionTypes';
var initialState = false;

var myReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.TOGGLE_BAR:
            return !state;
        default: return state;
    }
};

export default myReducer;