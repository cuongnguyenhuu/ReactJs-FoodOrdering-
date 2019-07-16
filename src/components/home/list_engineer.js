import React, {Component} from 'react';
import './list_engineer.css';
import CircleChart from './circle_chart'

class ListEngineer extends Component {
  render() {
    return(
        <div className="list_engineer">
          <div className="row fitter">
            <div className="col-xl-3 ">
              <form >
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Type to search"/>
                <div className="input-group-append">
                  <span className="input-group-text"><i class="fas fa-search"></i></span>
                </div>
              </div>
              </form>
            </div>
            <div className=" col-xl-3">
              <div class="form-group">
                {/* <label for="exampleFormControlSelect1">Example select</label> */}
                <select class="form-control" id="exampleFormControlSelect1">
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
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>Fullname</th>
                  <th>Status</th>
                  <th>Skype</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John</td>
                  <td><i class="fas fa-check"></i></td>
                  <td>john@example.com</td>
                </tr>
                <tr>
                  <td>Mary</td>
                  <td><i class="fas fa-times"></i></td>
                  <td>mary@example.com</td>
                </tr>
                <tr>
                  <td>July</td>
                  <td><i class="fas fa-check"></i></td>
                  <td>july@example.com</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row pagination_box">
            <ul class="pagination pagination-sm">
              <li class="page-item"><a class="page-link" href="#">Previous</a></li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item active"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
          </div>
        </div>
    );
  }
} 

export default ListEngineer;
