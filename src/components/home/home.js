import React, {Component} from 'react';
import SideBar from './side-bar';
import ListEngineer from './list_engineer';
import HeaderContent from './header_content';
import './home.css';
import { connect } from 'react-redux';
import * as actions from './../../actions/index';

class Home extends Component {
  onToggle = () =>{
    this.props.onToggleSideBar();
  }
  render() {
    var { isShowSideBar } = this.props;
    console.log("aaa"+isShowSideBar);
    return(
      <div className="row home">
        <div className={ isShowSideBar===true?'col-xl-2 side-bar':'col-xl-1 side-bar'}>
          <SideBar></SideBar>
        </div>
        <div className={ isShowSideBar===true?'col-xl-10 content':'col-xl-11 content'}>
          <div className="row">
            <div className="toggle_bar" onClick={this.onToggle}>
              <i className="fas fa-arrow-circle-left"></i>
            </div>
            <HeaderContent></HeaderContent>
          </div>
          <hr/> 
          <div className="row">
            <ListEngineer></ListEngineer>
          </div>  
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return { 
    isShowSideBar : state.tasks
  }
};

const mapDispatchToProps = (dispatch,props) =>{
  return {
    onToggleSideBar : () =>{
      dispatch(actions.toggleBar());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
