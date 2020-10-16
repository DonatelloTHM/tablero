import React, { Component } from "react";
import "./Timer.css";
import { ReactComponent as PlaySVG } from "./PomodoroIcons/play.svg";
import { ReactComponent as StopSVG } from "./PomodoroIcons/stop.svg";
import { ReactComponent as ResetSVG } from "./PomodoroIcons/reset.svg";

export class Timer extends Component {
  state = {
    isSession: true,
    timerSecond: 0,
    intervalId: 0,
  };

  playTimer = () => {
    let intervalId = setInterval(this.decreaseTimer, 1000);
    this.props.onPlayStopTimer(true);
    this.setState({ intervalId });
  };

  decreaseTimer = () => {
    switch (this.state.timerSecond) {
      case 0:
        if (this.props.timerMinute === 0) {
          if (this.state.isSession) {
            this.setState({ isSession: false });
            this.props.toggleInterval(this.state.isSession);
          } else {
            this.setState({ isSession: true });
            this.props.toggleInterval(this.state.isSession);
          }
        } else {
          this.props.updateTimerMinute();
          this.setState({ timerSecond: 59 });
        }
        break;
      default:
        this.setState((prevState) => ({
          timerSecond: prevState.timerSecond - 1,
        }));
    }
  };

  stopTimer = () => {
    this.props.onPlayStopTimer(false);
    clearInterval(this.state.intervalId);
  };

  resetTimer = () => {
    this.stopTimer();
    this.props.resetTimer();
    this.setState({ timerSecond: 0, isSession: true });
  };

  render() {
    return (
      <div className="timer-parent">
        <div>
          <h4>
            {this.state.isSession === true
              ? "Focusing Session"
              : "Take a Break"}
          </h4>
          <div
            onClick={this.props.switchClock}
            className="pomodoro-clock-timer"
          >
            <span>{this.props.timerMinute}</span>
            <span>:</span>
            <span>
              {this.state.timerSecond === 0
                ? "00"
                : this.state.timerSecond < 10
                ? "0" + this.state.timerSecond
                : this.state.timerSecond}
            </span>
          </div>
        </div>
        <div className="timer-actions">
          <PlaySVG className="timer-controllers" onClick={this.playTimer} />
          <StopSVG className="timer-controllers" onClick={this.stopTimer} />
          <ResetSVG className="timer-controllers" onClick={this.resetTimer} />
        </div>
      </div>
    );
  }
}

export default Timer;
