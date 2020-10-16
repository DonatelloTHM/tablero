import React, { Component } from "react";
import "./NewTodo.css";

export class NewTodo extends Component {
  state = {
    newTodo: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleNew(this.state.newTodo);
    this.setState({ newTodo: "" });
  };

  handleChange = (e) => {
    this.setState({
      newTodo: e.target.value,
    });
  };

  render() {
    return (
      <div className="new-todo-form">
        <form onSubmit={this.handleSubmit}>
          <input
            className="new-todo-input"
            onChange={this.handleChange}
            value={this.state.newTodo}
            placeholder="New Todo"
          />
        </form>
      </div>
    );
  }
}

export default NewTodo;
