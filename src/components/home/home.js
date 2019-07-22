import React, {Component} from 'react';
import SideBar from './side-bar';
import ListEngineer from './list_engineer';
import HeaderContent from './header_content';
import './home.css';
import { connect } from 'react-redux';
import * as actions from './../../actions/index';

class Home extends Component {
  onToggle = () =>{
    this.props.onChangeToggle();
  }
  render() {
    var stateToggleBar = this.props.tasks.stateToggleBar;
    console.log(stateToggleBar);
    return(
      <div className="row home">
        <div className={ stateToggleBar===true?'col-xl-4 side-bar':'col-xl-1 side-bar'}>
          <SideBar></SideBar>
        </div>
        <div className={ stateToggleBar===true?'col-xl-8 content':'col-xl-11 content'}>
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
  // console.log(state); 
  return { 
    tasks : state.tasks
  }
};


// const mapStateToprops = (state) =>{
//   return{
    
//   }
// };

const mapDispatchToProps = (dispatch,props) =>{
  return {
    onChangeToggle : () =>{
      dispatch(actions.changeToggle());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
