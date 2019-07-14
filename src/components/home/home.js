import React, {Component} from 'react';
import SideBar from './side-bar';
import './home.css'

class Home extends Component {
  render() {
    return(
      <div className="home">
        <div className="col-xl-2 side-bar">
          <SideBar></SideBar>
        </div>
      </div>
    );
  }
}

export default Home;
