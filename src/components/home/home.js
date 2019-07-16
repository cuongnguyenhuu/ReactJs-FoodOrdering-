import React, {Component} from 'react';
import SideBar from './side-bar';
import ListEngineer from './list_engineer';
import HeaderContent from './header_content';
import './home.css'

class Home extends Component {
  render() {
    return(
      <div className="row home">
        <div className="col-xl-2 side-bar">
          <SideBar></SideBar>
        </div>
        <div className="col-xl-10 content">
          <div class="row">
            <HeaderContent></HeaderContent>
          </div>
          <hr/>
          <div class="row">
            <ListEngineer></ListEngineer>
          </div>  
        </div>
      </div>
    );
  }
}

export default Home;
