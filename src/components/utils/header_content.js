import React, {Component} from 'react';
import './header_content.css';
// import { connect } from 'react-redux';
// import * as actions from './../../actions/index';

class HeaderContent extends Component {
  
  render() {
    var title = this.props.title;
    return(
        <div className="header_content row">
            <div className="col-xl-12 feature_name">
              <span>{title}</span>
            </div>
            
            
            <div className="col-xl-12 path">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item"><a href="#">Library</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Data</li>
                </ol>
              </nav>
            </div>
        </div>
    );
  }
} 



export default HeaderContent;
