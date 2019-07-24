import React, {Component} from 'react';
import './login.css'
import '../../images/background.jpg'
import { actLoginRequest } from './../../actions/index';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      Username: '',
      Password: '',
    };
  }
  onChange = (e) =>{
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]:value
    });
  }
  onSubmit = (e) =>{
    e.preventDefault();
    var {Username, Password} = this.state;
    var account = {
      Username,
      Password
    };

    this.props.onLogin(account);
    // console.log(Username+"/"+Password);
    
  }
  
  render() {
    // var accessToken = this.props.accessToken;  
    // // console.log(accessToken);
    // if(accessToken!='')
    // {
    //   return <Redirect to="/"/>
    // }
    var { Username, Password } = this.state;
    return(
      
      <div className = "login">
        <div className="background_image"></div>
        <form onSubmit={this.onSubmit} className="col-10 col-sm-8 col-md-6 col-lg-4 col-xl-4 form_login">
          <div className="title_login">
            <span>Lunch ordering</span>
          </div>
          <div className="form-group">
            <label htmlFor="username">Username: </label>
            <input 
              type="text" 
              className="form-control" 
              name="Username" 
              id="username" 
              aria-describedby="helpId" 
              placeholder="Type your username"
              value={Username}
              onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input 
              type="password" 
              className="form-control" 
              name="Password" 
              id="password" 
              aria-describedby="helpId" 
              placeholder="Type your password"
              value={Password}
              onChange={this.onChange}/>
          </div>
          <div className="btn-login">
            <button type="submit" className="btn btn-primary">Login</button>  
          </div>
          <div className="forgot-password">
            <a href="#">Forgot password?</a>
          </div>
        </form>
      </div>
    );
  }
}
// const mapStateToProps = state =>{
//   return{
//     accessToken : state.authentications
//   }
// }

const mapDispatchToProps = (dispatch, props) =>{
  return {
    onLogin : (account) =>{
      dispatch(actLoginRequest(account));
    }
  };
}
export default connect(null,mapDispatchToProps)(Login);
