import * as types from '../constants/ActionTypes';
var initialState=[];

const user = (state = initialState, action) =>{
    // console.log(action);
    switch(action.type) {
        case types.GET_ALL_USER:
            // console.log(action.accessToken);
            state = action.allUser;
            return [...state];
        default: return [...state];
    }
};
export default user;