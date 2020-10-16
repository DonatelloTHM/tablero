import React from "react";
import "./SessionLength.css";
import { ReactComponent as UpSVG } from "./PomodoroIcons/up.svg";
import { ReactComponent as DownSVG } from "./PomodoroIcons/down.svg";

function SessionLength({ sessionLength, increaseSession, decreaseSession }) {
  function decreaseCounter() {
    if (sessionLength === 1) {
      return;
    }
    decreaseSession();
  }

  function increaseCounter() {
    if (sessionLength === 60) {
      return;
    }
    increaseSession();
  }

  return (
    <div className="session-length-parent">
      <h1>Session Length</h1>
      <div className="session-length">
        <DownSVG className="pomodoro-controllers" onClick={decreaseCounter} />
        <p>{sessionLength}</p>
        <UpSVG className="pomodoro-controllers" onClick={increaseCounter} />
      </div>
    </div>
  );
}

export default SessionLength;
