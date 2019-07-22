import * as types from './../constants/ActionTypes';
export const toggleBar = () => {
    return {
        type : types.TOGGLE_BAR
    }
};

export const changeToggle = () =>{
    return{
        type :types.CHANGE_TOGGLE
    }
}