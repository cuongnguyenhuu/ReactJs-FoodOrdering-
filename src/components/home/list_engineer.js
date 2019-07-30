import React, {Component} from 'react';
import './list_engineer.css';
import CircleChart from './circle_chart'
import {connect} from 'react-redux';
import * as actions from './../../actions/index';

class ListEngineer extends Component {
  componentDidMount(){
    this.props.onGetAllUser();
  }
  showAllUSer(allUSer){
    var result = null;
    if(allUSer.length>0){
      result = allUSer.map((user, index)=>{
        console.log(user.Name);
        return (
          <tr key={index}>
                  <td>{user.Username}</td>
                  <td>{user.Name}</td>
                  <td>{user.IsOrdered===true?<i className="fas fa-check"></i>:<i class="fas fa-times"></i>}</td>
                  <td>{user.Phone}</td>
          </tr>
        );
      });
    }
    return result;
  }
  render() {
    var {allUSer} = this.props;
    console.log(allUSer);
    return(
        <div className="list_engineer">
          <div className="row fitter">
            <div className="col-xl-3 ">
              <form >
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Type to search"/>
                <div className="input-group-append">
                  <span className="input-group-text"><i className="fas fa-search"></i></span>
                </div>
              </div>
              </form>
            </div>
            <div className=" col-xl-3">
              <div className="form-group">
                {/* <label for="exampleFormControlSelect1">Example select</label> */}
                <select className="form-control" id="exampleFormControlSelect1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
            <div className="col-xl-3 ">
              <div className="statistic_box statistic_registered">
                <p className="title_statictis">
                  TOTAL REGISTERED
                </p>
                <p>
                  100/100
                </p>
              </div>
            </div>
            <div className="col-xl-3 ">
              <div className="statistic_box statistic_menu">
                <p className="title_statictis">
                MENU PERCENTAGE 
                </p>
                <p>
                  50/50
                </p>
              </div>
            </div>
            <div className="col-xl-3">
              
            </div>
          </div>
          <div className="row">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Name</th>
                  <th>Is ordered</th>
                  <th>Phone number</th>
                </tr>
              </thead>
              <tbody>
                {this.showAllUSer(allUSer)}
              </tbody>
            </table>
          </div>
          <div className="row pagination_box">
            <ul className="pagination pagination-sm">
              <li className="page-item"><a className="page-link" href="#">Previous</a></li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item active"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
          </div>
        </div>
    );
  }
} 
const mapStateToProps = (state) =>{
  return { 
    allUSer : state.user
  }
}
const mapDispatchToProps = (dispatch,props) =>{
  return {
    onGetAllUser : () =>{
      dispatch(actions.actGetUserRequest());
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ListEngineer);
