import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsernameInput= (e) => {
    
    this.setState({
      username: e.target.value
    })
    console.log(this.state.username.length)
    console.log(this.state.username)
  }

  handlePasswordInput= (e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
  }



 

  render() {
    return (
      <form onSubmit = {
        (this.state.username.length >0 && this.state.password.length >0) ? this.props.handleLogin : this.handleOnSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" 
            onChange= {this.handleUsernameInput}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password"
            onChange= {this.handlePasswordInput} />
          </label>
        </div>
        
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}



export default LoginForm;
