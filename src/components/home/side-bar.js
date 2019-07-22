import React, {Component} from 'react';
import avatar from '../../images/background.jpg'
import './side-bar.css';
import { connect } from 'react-redux';
class SideBar extends Component {
  render() {
    var isShowSideBar = this.props.isShowSideBar;
    console.log("SB: "+isShowSideBar);
    return(
      <div className="side_bar">
        <div className="row avatar_box">
            <div className="col-xl-12">
                <img src={avatar} className="rounded-circle" alt="" height="50px" width="50px"/>
            </div>
            {isShowSideBar===true?<div className="col-xl-12">
                <span>
                    Admin
                </span>
            </div>:''}
        </div>
        <hr/>
        <div className="row task">    
           <i className="fa fa-chart-line col-xl-4" aria-hidden="true"></i>
            {isShowSideBar===true?<span className="col-xl-6">  Home</span>:''}
        </div>
        <hr/>
        <div className="row task">    
            <i className="fa fa-list col-xl-4" aria-hidden="true"></i>
            {isShowSideBar===true?<span className="col-xl-6">  Set menu</span>:''}        
        </div>
        <hr/> 
        <div className="row task">    
            <i className="fa fa-cogs col-xl-4" aria-hidden="true"></i>
            {isShowSideBar===true?<span className="col-xl-6">  Manage Engineer</span>:''}
        </div>
        <hr/> 
        <div className="row task">    
            <i className="fa fa-sign-out-alt col-xl-4" aria-hidden="true"></i>
            {isShowSideBar===true?<span className="col-xl-6">  Logout</span>:''}
        </div>
        <hr/>
      </div>
    );
  }
} 
const mapStateToProps = (state) =>{
  return { 
    isShowSideBar : state.tasks
  }
};
export default connect(mapStateToProps,null)(SideBar);
