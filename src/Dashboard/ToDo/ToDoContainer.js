import React, { Component } from "react";
import ToDoFilter from "./ToDoFilter";
import ToDos from "./ToDos";
import "./ToDoContainer.css";
import NewTodo from "./NewTodo";

export class ToDoContainer extends Component {
  state = {
    animationClass: "scale-in-br",
    allTodos: [],
    filterBy: "All",
  };

  componentDidMount() {
    fetch("http://localhost:3000/users/1")
      .then((response) => response.json())
      .then((result) => {
        this.setState({ allTodos: [...this.state.allTodos, ...result.to_dos] });
      });
  }

  handleCompleted = (id, newState) => {
    fetch(`http://localhost:3000/to_dos/${id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: newState }),
    })
      .then((response) => response.json())
      .then((result) => {});

    const allTodos = this.state.allTodos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: newState };
      }
      return todo;
    });

    this.setState({ allTodos });
  };

  handleDelete = (id) => {
    fetch(`http://localhost:3000/to_dos/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => {
        const allTodos = this.state.allTodos.filter((todo) => {
          return todo.id !== id;
        });

        this.setState({ allTodos });
      });
  };

  handleNewToDo = (content) => {
    fetch("http://localhost:3000/to_dos", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: content, user_id: 1 }),
    })
      .then((response) => response.json())
      .then((newTodo) => {
        this.setState({ allTodos: [...this.state.allTodos, newTodo] });
      });
  };

  handleFilter = (filterValue) => {
    this.setState({ filterBy: filterValue.target.innerText });
  };

  toDosFiltered = () => {
    if (this.state.filterBy === "Active") {
      return this.state.allTodos.filter((todo) => {
        return !todo.completed;
      });
    } else if (this.state.filterBy === "Completed") {
      return this.state.allTodos.filter((todo) => {
        return todo.completed;
      });
    } else return this.state.allTodos;
  };

  render() {
    return (
      <div
        className={`todo-container scale-in-br ${this.state.animationClass}`}
      >
        <ToDoFilter
          handleFilter={this.handleFilter}
          activeClass={this.state.filterBy}
        />
        <ToDos
          todoObjects={this.toDosFiltered()}
          handleComplete={this.handleCompleted}
          handleDelete={this.handleDelete}
        />
        <NewTodo handleNew={this.handleNewToDo} />
      </div>
    );
  }
}

export default ToDoContainer;
