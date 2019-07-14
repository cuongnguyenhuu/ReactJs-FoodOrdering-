import React, {Component} from 'react';
import './App.css';
import routes from './router';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return(
      <Router>
        <div className="App">
          <Switch>
            { this.showContents(routes)}
          </Switch>
        </div>
      </Router>
    );
  }
  showContents = (routes) => {
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
  }
}

export default App;
