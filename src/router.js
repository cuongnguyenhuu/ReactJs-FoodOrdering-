import React from 'react';
import Login from './components/login/login';
import Home from './components/home/home';
import NotFound from './components/not-found';

const routes =[
    {
        path : '/',
        exact : true,
        main : () => <Home />
    },
    {
        path : '/login',
        exact : false,
        main : () => <Login />
    },
    {
        path : '',
        exact : false,
        main : () => <NotFound />
    }
];

export default routes;