import React, {Component} from 'react';
import './login.css'
import '../../images/background.jpg'

class Login extends Component {
  render() {
    return(
      <div className = "login">
        <div className="background_image"></div>
        <form className="col-10 col-sm-8 col-md-6 col-lg-4 col-xl-4 form_login">
          <div className="title_login">
            <span>Lunch ordering</span>
          </div>
          <div className="form-group">
            <label htmlFor="username">Username: </label>
            <input type="text" className="form-control" name="username" id="username" aria-describedby="helpId" placeholder="Type your username"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input type="password" className="form-control" name="password" id="password" aria-describedby="helpId" placeholder="Type your password"/>
          </div>
          <div className="btn-login">
            <button type="button" className="btn btn-primary">Login</button>  
          </div>
          <div className="forgot-password">
            <a href="#">Forgot password?</a>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
