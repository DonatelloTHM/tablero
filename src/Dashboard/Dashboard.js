import React, { Component } from "react";
import NewsContainer from "./News/NewsContainer";
import TimePomodoro from "./TimePomodoro";
import "./Dashboard.css";
import Weather from "./Weather";
import WeathFive from "./WeathFive";
import ToDoContainer from "./ToDo/ToDoContainer";
import { ReactComponent as ToDoSVG } from "./weathersvg/mist.svg";
import { ReactComponent as JournalSVG } from "./weathersvg/journal.svg";
import { ReactComponent as NotesSVG } from "./weathersvg/notes.svg";
import Notes from "./Notes/Notes";
import Pomodoro from "./Pomodoro/Pomodoro";
import JournalPage from "./Journal/JournalPage";

export class Dashboard extends Component {
  state = {
    todoActive: false,
    notesActive: false,
    clockActive: false,
    journalActive: false,
  };

  handleNotesButton = (e) => {
    this.setState((prevState) => ({
      notesActive: !prevState.notesActive,
      todoActive: false,
      journalActive: false,
    }));
  };

  handleJournalButton = (e) => {
    this.setState((prevState) => ({
      journalActive: !prevState.journalActive,
      todoActive: false,
      notesActive: false,
    }));
  };

  handleTodoButton = (e) => {
    this.setState((prevState) => ({
      todoActive: !prevState.todoActive,
      notesActive: false,
      journalActive: false,
    }));
  };

  switchClock = () => {
    this.setState((prevState) => ({ clockActive: !prevState.clockActive }));
  };

  render() {
    return (
      <div className="Dashboard">
        <div className="todo-button">
          <h1
            onClick={this.handleJournalButton}
            className={
              this.state.journalActive
                ? "active-navigation"
                : "navigating-buttons"
            }
          >
            <JournalSVG />
            Journal
          </h1>
          <h1
            onClick={this.handleNotesButton}
            className={
              this.state.notesActive
                ? "active-navigation"
                : "navigating-buttons"
            }
          >
            <NotesSVG />
            Notes
          </h1>
          <h1
            onClick={this.handleTodoButton}
            className={
              this.state.todoActive ? "active-navigation" : "navigating-buttons"
            }
          >
            <ToDoSVG />
            ToDo
          </h1>
        </div>
        <h1 className="logout">Logout</h1>
        <img
          className="profile-pic"
          src="https://res.cloudinary.com/dwexim1nt/image/upload/v1601559621/zghollv5dfbhrmytl6pt.jpg"
          alt="profile"
        />

        <Weather />
        {this.state.clockActive ? (
          <Pomodoro switchClock={this.switchClock} />
        ) : (
          <>
            <TimePomodoro switchClock={this.switchClock} />
            <NewsContainer />
          </>
        )}
        {this.state.journalActive ? <JournalPage /> : null}
        {this.state.notesActive ? <Notes /> : null}
        {this.state.todoActive ? <ToDoContainer /> : null}
      </div>
    );
  }
}

export default Dashboard;
