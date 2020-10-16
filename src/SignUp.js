import React, { Component } from "react";
import "./SignUp.css";

export class SignUp extends Component {
  state = {
    name: "",
    username: "",
    password: "",
    password_confirmation: "",
    email: "",
    location: "",
    interests: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state);
  };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        {" "}
        <div className="login-parent">
          <form onSubmit={this.handleSubmit} className="login-form">
            <h1>SignUp Information</h1>
            <input
              onChange={this.handleInput}
              className="username-input"
              type="text"
              name="name"
              value={this.state.name}
              placeholder="Name"
            />
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
              className="username-input"
              type="password"
              name="password"
              value={this.state.password}
              placeholder="Password"
            />
            <input
              onChange={this.handleInput}
              className="username-input"
              type="password"
              name="password_confirmation"
              value={this.state.password_confirmation}
              placeholder="Password Confirmation"
            />
            <input
              onChange={this.handleInput}
              className="username-input"
              type="text"
              name="email"
              value={this.state.email}
              placeholder="Email"
            />
            <input
              onChange={this.handleInput}
              className="username-input"
              type="text"
              name="location"
              value={this.state.location}
              placeholder="Location"
            />
            <input
              onChange={this.handleInput}
              className="username-input"
              type="text"
              name="interests"
              value={this.state.interests}
              placeholder="Interests"
            />
            <input className="submit-login" type="submit" value="Sign Up" />
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
