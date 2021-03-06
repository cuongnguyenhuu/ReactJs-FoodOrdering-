import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Login from './../components/login/login';
export const PrivateRoute = ({ component: Component, ...rest})=>(
    <Route
        {...rest}
        render={props=>
            localStorage.getItem("accessToken")?(
                <Component {...props}/>
            ):(
                <Redirect
                    to="/login"
                ></Redirect>
            )
        }  
    />
);