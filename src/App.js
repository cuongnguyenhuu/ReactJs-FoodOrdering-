import React, {Component} from 'react';
import './App.css';
import { privateRoutes, publicRoutes } from './router';
import { PrivateRoute } from './constants/privateRoute';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/login/login';
import Home from './components/home/home';
import NotFound from './components/not-found';

class App extends Component {
  render() {
    return(
      <Router>
        <div className="App">
          <Switch>
            <Route path="/login" component={Login}></Route>

            <PrivateRoute path="/" exact component={Home}></PrivateRoute>
            <Route path="" component={NotFound}></Route>
            {/* { this.showPrivateContents(privateRoutes)}
            { this.showPublicContents(publicRoutes)} */}
          </Switch>
        </div>
      </Router>
    );
  }
  showPrivateContents = (routes) => {
    var result = null;
    if(routes.length > 0){
      result = routes.map((route, index) => {
        return(
          <PrivateRoute 
            key = {index}
            path = {route.path}
            exact = {route.exact}
            component = {route.main}
          />
        );
      });
    }
    return result;
  };
  showPublicContents = (routes) => {
    var result = null;
    if(routes.length > 0){
      result = routes.map((route, index) => {
        return(
          <Route 
            key = {index}
            path = {route.path}
            exact = {route.exact}
            component = {route.main}
          />
        );
      });
    }
    return result;
  };
}

export default App;
