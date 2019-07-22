import * as types from './../constants/ActionTypes';
var initialState = {
    stateToggleBar : false
}

var myReducer = (state = initialState, action) =>{
    switch(action.type){
        // case types.TOGGLE_BAR:
        //     return state;
        case types.CHANGE_TOGGLE:
            // console.log(action);
            state.stateToggleBar = !state.stateToggleBar;
            console.log(state);
            return state;
        default: return state;
    }
};

export default myReducer;