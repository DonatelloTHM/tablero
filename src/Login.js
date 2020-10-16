import React, { Component } from "react";
import "./Login.css";

export class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleLogin(this.state);
  };

  render() {
    return (
      <div className="login-parent">
        <form onSubmit={this.handleSubmit} className="login-form">
          <h1>Login Information</h1>
          <input
            onChange={this.handleInput}
            className="username-input"
            type="text"
            name="username"
            value={this.state.username}
            placeholder="Username"
          />
          <input
            onChange={this.handleInput}
            className="password-input"
            type="password"
            name="password"
            value={this.state.password}
            placeholder="Password"
          />
          <input className="submit-login" type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default Login;
