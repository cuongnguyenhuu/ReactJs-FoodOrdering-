import React, {Component} from 'react';
import './header_content.css';

class HeaderContent extends Component {
  render() {
    return(
        <div className="header_content row">
            <div className="col-xl-12 feature_name">
              <span>Engineer list</span>
            </div>
            
            <div className="toggle_bar">
              <i className="fas fa-arrow-circle-left"></i>
            </div>
            <div className="col-xl-12 path">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item"><a href="#">Library</a></li>
                  <li class="breadcrumb-item active" aria-current="page">Data</li>
                </ol>
              </nav>
            </div>
        </div>
    );
  }
} 

export default HeaderContent;
