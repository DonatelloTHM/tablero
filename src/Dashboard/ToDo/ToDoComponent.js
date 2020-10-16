import React, { Component } from "react";
import "./ToDoComponent.css";

export class ToDoComponent extends Component {
  state = {
    completed: false,
  };

  componentDidMount() {
    this.setState((prevState) => ({ completed: this.props.completed }));
  }

  handleCheckbox = (e) => {
    debugger;
    this.setState({ completed: e.target.checked });
    this.props.handleCompleted(this.props.id, e.target.checked);
  };

  render() {
    return (
      <div className="todo-component slide-in-left">
        <input
          onChange={this.handleCheckbox}
          type="checkbox"
          checked={this.state.completed}
        />
        <h1
          className={
            this.state.completed ? "todo-task-completed" : "todo-task-active"
          }
        >
          {this.props.content}
        </h1>
        <img
          onClick={() => this.props.handleDelete(this.props.id)}
          src="https://img.icons8.com/flat_round/15/000000/delete-sign.png"
        />
      </div>
    );
  }
}

export default ToDoComponent;
