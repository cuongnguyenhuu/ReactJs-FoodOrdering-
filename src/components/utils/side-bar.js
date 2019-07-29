import React, {Component} from 'react';
import avatar from '../../images/background.jpg'
import './side-bar.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
        <Link to="/" className="row task">    
           <i className="fa fa-chart-line col-xl-4" aria-hidden="true"></i>
            {isShowSideBar===true?<span className="col-xl-6">  Home</span>:''}
        </Link>
        <hr/>
        <Link to="/menu" className="row task">    
            <i className="fa fa-list col-xl-4" aria-hidden="true"></i>
            {isShowSideBar===true?<span className="col-xl-6">  Set menu</span>:''}        
        </Link>
        <hr/> 
        <div className="row task">    
            <i className="fa fa-cogs col-xl-4" aria-hidden="true"></i>
            {isShowSideBar===true?<span className="col-xl-6">  Manage Engineer</span>:''}
        </div>
        <hr/> 
        <Link to="/login" className="row task">    
            <i className="fa fa-sign-out-alt col-xl-4" aria-hidden="true"></i>
            {isShowSideBar===true?<span className="col-xl-6">  Logout</span>:''}
        </Link>
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
