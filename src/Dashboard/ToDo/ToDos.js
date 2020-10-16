import React, { Component } from "react";
import { ToDoComponent } from "./ToDoComponent";
import "./ToDos.css";

export class ToDos extends Component {
  renderToDos = () => {
    return this.props.todoObjects.map((toDoObj) => {
      return (
        <ToDoComponent
          key={toDoObj.id}
          id={toDoObj.id}
          content={toDoObj.content}
          completed={toDoObj.completed}
          handleCompleted={this.props.handleComplete}
          handleDelete={this.props.handleDelete}
        />
      );
    });
  };

  render() {
    return <div className="todos-place">{this.renderToDos()}</div>;
  }
}

export default ToDos;
