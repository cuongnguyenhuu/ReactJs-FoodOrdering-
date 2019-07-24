import * as types from '../constants/ActionTypes';
var initialState='';

const authentications = (state = initialState, action) =>{
    // console.log(action);
    switch(action.type) {
        case types.LOGIN:
            // console.log(action.accessToken);
            state = action.accessToken;
            return [...state];
        default: return [...state];
    }
};
export default authentications;