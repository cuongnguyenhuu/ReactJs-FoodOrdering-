import * as types from './../constants/ActionTypes';
import callAPI from './../utils/apiCaller';
export const toggleBar = () => {
    return {
        type : types.TOGGLE_BAR
    }
};

export const actLoginRequest = (account) =>{
    return dispatch =>{
        return callAPI('Users/auth','POST',account).then(res => {
            // console.log(res.status);
            dispatch(actLogin(res.data));
            localStorage.setItem("accessToken",res.data);
        }).catch(err=>{
            console.log(err.response.data.message);
            // return confirm(err.response.data);
        });
    }
}
export const actLogin = (accessToken) =>{
    console.log(accessToken); 
    return {
        type: types.LOGIN,
        accessToken
    }
}