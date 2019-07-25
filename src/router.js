import React from 'react';
import Login from './components/login/login';
import Home from './components/home/home';
import NotFound from './components/not-found';

export const privateRoutes =[
    {
        path : '/',
        exact : true,
        main : () => <Home />
    },
    {
        path : '',
        exact : false,
        main : () => <NotFound />
    }
];

export const publicRoutes = [
    {
        path : '/login',
        exact : false,
        main : () => <Login />
    }
];