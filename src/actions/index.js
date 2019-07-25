import * as types from './../constants/ActionTypes';
import callAPI from './../utils/apiCaller';
import {Redirect} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
export const toggleBar = () => {
    return {
        type : types.TOGGLE_BAR
    }
};

export const actLoginRequest = (account) =>{
    return dispatch =>{
        return callAPI('Users/auth','POST',account).then(res => {
            console.log(res.status);
            dispatch(actLogin(res.data));
            localStorage.setItem("accessToken",res.data);
            // BrowserRouter.push("/");
            window.location.href="/";
            // <Redirect to="/"></Redirect>
        }).catch(err=>{
            // console.log(err.response.data.message);
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

export const actGetUserRequest = () =>{
    return dispatch =>{
        return callAPI("Users/GetAllUsers","GET",null).then(res => {
            console.log(res.data);
            dispatch(actGetUser(res.data));
            // localStorage.setItem("accessToken",res.data);
            // BrowserRouter.push("/");
            // window.location.href="/";
            // <Redirect to="/"></Redirect>
        }).catch(err=>{
            console.log(err.response.data.message);
            // return confirm(err.response.data);
        });
    }
} 

export const actGetUser =(allUser) =>{
    return{
        type: types.GET_ALL_USER,
        allUser
    }
}

export const actGetMenuRequest = () =>{
    var menus =[];
    callAPI("Menus/GetAllMenus","GET",null).then(res => {
        console.log(res.data);
        menus = res.data;
        // localStorage.setItem("accessToken",res.data);
        // BrowserRouter.push("/");
        // window.location.href="/";
        // <Redirect to="/"></Redirect>
    }).catch(err=>{
        // console.log(err.response.data.message);
        // return confirm(err.response.data);
    });
    
    return dispatch =>{
        return callAPI("Menus/GetAllMenus","GET",null).then(res => {
            console.log(res.data);
            dispatch(actGetMenu(res.data));
            // localStorage.setItem("accessToken",res.data);
            // BrowserRouter.push("/");
            // window.location.href="/";
            // <Redirect to="/"></Redirect>
        }).catch(err=>{
            // console.log(err.response.data.message);
            // return confirm(err.response.data);
        });
    }
} 

export const actGetMenu =(allMenu) =>{
    console.log("BBB"+allMenu);
    return{
        type: types.GET_ALL_MENU,
        allMenu
    }
}