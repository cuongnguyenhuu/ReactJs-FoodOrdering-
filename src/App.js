import React, {Component} from 'react';
import './App.css';
import { privateRoutes, publicRoutes } from './router';
import { PrivateRoute } from './constants/privateRoute';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/login/login';
import Home from './components/home/home';
import NotFound from './components/not-found';
var key = 0;
class App extends Component {

  showPrivateContents = (routes) => {
    var result = null;
    if(routes.length > 0){
      result = routes.map((route, index) => {
        
        key += 1; 
        console.log(key);
        return(
          <PrivateRoute 
            key = {key}
            path = {route.path}
            exact = {route.exact}
            component = {route.main}
          />
        );
      });
    }
    return result;
  }
  showPublicContents = (routes) => {
    var result = null;
    if(routes.length > 0){
      result = routes.map((route, index) => {
 
        key += 1; 
        console.log(route.path);
        return(
          <Route 
            key = {key}
            path = {route.path}
            exact = {route.exact}
            component = {route.main}
          />
        );
      });
    }
    return result;
  }
  render() {
    // console.log(this.showPublicContents(publicRoutes));
    return(
      <Router>
        <div className="App">
          <Switch>
            {/* <Route path="/login" component={Login}></Route>

            <PrivateRoute path="/" exact component={Home}></PrivateRoute>
            <Route path="" component={NotFound}></Route> */}
            { this.showPublicContents(publicRoutes)}
            { this.showPrivateContents(privateRoutes)}
            

          </Switch>
        </div>
      </Router>
    );
  }
  
}

export default App;
