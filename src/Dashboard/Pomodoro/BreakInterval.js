import React from "react";
import "./BreakInterval.css";
import { ReactComponent as UpSVG } from "./PomodoroIcons/up.svg";
import { ReactComponent as DownSVG } from "./PomodoroIcons/down.svg";

function BreakInterval({ breakInterval, increaseBreak, decreaseBreak }) {
  function decreaseCounter() {
    if (breakInterval === 1) {
      return;
    }
    decreaseBreak();
  }

  function increaseCounter() {
    if (breakInterval === 60) {
      return;
    }
    increaseBreak();
  }
  return (
    <div className="break-interval-timer">
      <h1>Break Interval</h1>
      <div className="break-interval">
        <DownSVG className="pomodoro-controllers" onClick={decreaseCounter} />
        <p>{breakInterval}</p>
        <UpSVG className="pomodoro-controllers" onClick={increaseCounter} />
      </div>
    </div>
  );
}

export default BreakInterval;
