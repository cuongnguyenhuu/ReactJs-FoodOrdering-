import React, {Component} from 'react';
import avatar from '../../images/background.jpg'
import './side-bar.css';
class SideBar extends Component {
  render() {
    return(
      <div className="side_bar">
        <div className="row">
            <div className="col-xl-12">
                <img src={avatar} className="rounded-circle" alt="" height="50px" width="50px"/>
            </div>
            <div className="col-xl-12">
                <span>
                    Admin
                </span>
            </div>
        </div>
        <hr/>
        <div className="row task">    
            <i className="fa fa-list col-xl-4" aria-hidden="true"></i>
            <span className="col-xl-6">  List asdsadasdsadsad</span>
        </div>
        <hr/>
        <div className="row task">    
            <i className="fa fa-list col-xl-4" aria-hidden="true"></i>
            <span className="col-xl-6">  List asdsadasdsadsad</span>
        </div>
        <hr/> 
        <div className="row task">    
            <i className="fa fa-list col-xl-4" aria-hidden="true"></i>
            <span className="col-xl-6">  List asdsadasdsadsad</span>
        </div>
        <hr/>
        <div className="row task">    
            <i className="fa fa-list col-xl-4" aria-hidden="true"></i>
            <span className="col-xl-6">  List asdsadasdsadsad</span>
        </div>
        <hr/>
      </div>
    );
  }
}

export default SideBar;
