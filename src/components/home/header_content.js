import React, {Component} from 'react';
import './header_content.css';

class HeaderContent extends Component {
  render() {
    return(
        <div className="header_content row">
            <div className="col-xl-3 feature_name">
              <span>Engineer list</span>
            </div>
            <div className="col-xl-8 path">
              <span>
                <a href="#">Home/</a>
                <a href="#">Engineer list</a>
              </span>
            </div>
        </div>
    );
  }
} 

export default HeaderContent;
