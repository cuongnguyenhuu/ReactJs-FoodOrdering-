import React, {Component} from 'react';
import SideBar from '../utils/side-bar';
// import ListEngineer from './list_engineer';
import ListMenu from './listMenu';
import MenuToDay from './menuToDay';
import HeaderContent from '../utils/header_content';
import '../home/home.css';
import { connect } from 'react-redux';
import * as actions from './../../actions/index';

class Menu extends Component {
  componentDidMount(){
    this.props.onGetMenuToDay();
  }
  onToggle = () =>{
    this.props.onToggleSideBar();
  }
  showMenuToday=(menus)=>{
    var result=null;
    console.log(menus.Menus);
    if(typeof(menus.Menus)!=="undefined")
    if(menus.Menus.length>0){
      result = menus.Menus.map((menu,index)=>{
        return(
          <div class="col-xl-6" key={index}>
              <MenuToDay menu={menu}></MenuToDay>
          </div>
        );
      });
    }
    return result;
  }
  render() {
    var { isShowSideBar } = this.props;
    console.log("aaa"+isShowSideBar);
    var {menuToday} = this.props;
    return(
      <div className="row home">
        <div className={ isShowSideBar===true?'col-xl-2 side-bar':'col-xl-1 side-bar'}>
          <SideBar></SideBar>
        </div>
        <div className={ isShowSideBar===true?'col-xl-10 content':'col-xl-11 content'}>
          <div className="row">
            <div className="toggle_bar" onClick={this.onToggle}>
              { isShowSideBar==true?<i className="fas fa-arrow-circle-left"></i>:<i className="fas fa-arrow-circle-right"></i>}
            </div>
            <HeaderContent title="Menu"></HeaderContent>
          </div>
          <hr/> 
          <div className="row">
            <div className="col-xl-12">
              <h2>Menu today <span class="badge badge-danger">New</span></h2>
            </div>
            {this.showMenuToday(menuToday)}
            
          </div>  
          <div className="col-xl-12">
              <h2>All menus <span class="badge badge-info">All</span></h2>
          </div>
          <div className="row">
            
            <ListMenu></ListMenu>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return { 
    isShowSideBar : state.tasks,
    menuToday : state.menuToday
  }
};

const mapDispatchToProps = (dispatch,props) =>{
  return {
    onToggleSideBar : () =>{
      dispatch(actions.toggleBar());
    },
    onGetMenuToDay:() =>{
      dispatch(actions.actGetMenuToDayRequest());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
