import React, {Component} from 'react';
import '../home/list_engineer.css';
// import CircleChart from './circle_chart'
import {connect} from 'react-redux';
import * as actions from './../../actions/index';

class MenuToday extends Component {
  // componentDidMount(){
  //   console.log();
  // }
  showDish=(dishes)=>{
    var result=null;
    if(dishes.length>0){
      result = dishes.map((dish,index)=>{
        return(
          <tr key={index}>
                    <td><span>{dish.Name}</span></td>
                    <td><img src={dish.Image} width="50px" height="50px" class="rounded" alt="Cinque Terre"></img></td>
                    <td><span class="badge badge-info">{dish.type}</span></td>
                    <td><span>{dish.Description}</span></td>
                </tr>
        );
      });
    }
    return result;
  }
  render() {
    var menu = this.props.menu;
    return(
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">{menu.Name}</h4>
                <p class="card-text">
                    
                    
                    
                </p>
                <table class="table table-hover table-primary">
                <thead>
                <tr>
                    <th>Dish name</th>
                    <th>Image</th>
                    <th>Type</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                  {this.showDish(menu.Dishes)}
                </tbody>
            </table>
                <a href="#" class="card-link">Edit</a>
            </div>
        </div>
    );
  }
} 

export default MenuToday;
