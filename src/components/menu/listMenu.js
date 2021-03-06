import React, {Component} from 'react';
import '../home/list_engineer.css';
// import CircleChart from './circle_chart'
import {connect} from 'react-redux';
import * as actions from './../../actions/index';

class ListMenu extends Component {
  componentDidMount(){
    this.props.onGetAllMenu();
  }
  showAllMenu(allMenu){
    var result = null;
    if(allMenu.length>0){
      result = allMenu.map((menu, index)=>{
        console.log(menu.Name);
        return (
          <tr key={index}>
                  <td>{menu.Name}</td>
                  <td>{menu.DishIds.length}</td>
                  <td><button type="button" class="btn btn-info">Detail</button></td>
          </tr>
        );
      });
    }
    return result;
  }
  render() {
    var {allMenu} = this.props;
    console.log("AAA"+allMenu);
    return(
        <div className="list_engineer">
          <div className="row">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Total dishes</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.showAllMenu(allMenu)}
              </tbody>
            </table>
          </div>
        </div>
    );
  }
} 
const mapStateToProps = (state) =>{
    // console.log(state.menu)
  return { 
    allMenu : state.menu
  }
}
const mapDispatchToProps = (dispatch,props) =>{
    // 
  return {
    onGetAllMenu : () =>{
      dispatch(actions.actGetMenuRequest());
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ListMenu);
