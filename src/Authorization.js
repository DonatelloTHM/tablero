import React, { Component } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

export class Authorization extends Component {
  state = {
    user: { id: 0, username: "" },
    token: "",
  };

  handleSubmit = (userObj) => {
    console.log(userObj);
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObj),
    })
      .then((response) => response.json())
      .then(this.handleResponse);
  };

  handleResponse = (resp) => {
    if (resp.user) {
      localStorage.token = resp.token;
      this.setState({ resp });
    }
  };

  handleLogin = (userObj) => {
    console.log(userObj);
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObj),
    })
      .then((response) => response.json())
      .then(this.handleResponse);
  };
  render() {
    return (
      <div>
        <Login handleLogin={this.handleLogin} />
        <SignUp handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default Authorization;
