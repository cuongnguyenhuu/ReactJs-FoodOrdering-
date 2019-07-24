import React, {Component} from 'react';
import './App.css';
import { privateRoutes, publicRoutes } from './router';
import { PrivateRoute } from './constants/privateRoute';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


class App extends Component {
  render() {
    return(
      <Router>
        <div className="App">
          <Switch>
            {/* { this.showPrivateContents(privateRoutes)} */}
            { this.showPublicContents(publicRoutes)}
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
