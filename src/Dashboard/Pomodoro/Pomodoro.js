import React, { Component } from "react";
import SessionLength from "./SessionLength";
import BreakInterval from "./BreakInterval";
import Timer from "./Timer";
import "./Pomodoro.css";

export class Pomodoro extends Component {
  state = {
    breakLength: 5,
    sessionLength: 25,
    timerMinute: 25,
    isPlay: false,
  };

  onIncreaseBreakLength = () => {
    this.setState((prevState) => ({ breakLength: prevState.breakLength + 1 }));
  };

  onDecreaseBreakLength = () => {
    this.setState((prevState) => ({ breakLength: prevState.breakLength - 1 }));
  };

  onIncreaseSessionLength = () => {
    this.setState((prevState) => ({
      sessionLength: prevState.sessionLength + 1,
      timerMinute: prevState.timerMinute + 1,
    }));
  };

  onDecreaseSessionLength = () => {
    this.setState((prevState) => ({
      sessionLength: prevState.sessionLength - 1,
      timerMinute: prevState.timerMinute - 1,
    }));
  };

  onToggleInterval = (isSession) => {
    if (isSession) {
      this.setState({
        timerMinute: this.state.sessionLength,
      });
    } else {
      this.setState({
        timerMinute: this.state.breakLength,
      });
    }
  };

  onUpdateTimerMinute = () => {
    this.setState((prevState) => ({
      timerMinute: prevState.timerMinute - 1,
    }));
  };

  onResetTimer = () => {
    this.setState({ timerMinute: this.state.sessionLength });
  };

  onPlayStopTimer = (isPlay) => {
    this.setState({ isPlay });
  };

  render() {
    return (
      <div className="the-pomodoro rotate-in-2-cw">
        <Timer
          switchClock={this.props.switchClock}
          timerMinute={this.state.timerMinute}
          breakLength={this.state.breakLength}
          updateTimerMinute={this.onUpdateTimerMinute}
          toggleInterval={this.onToggleInterval}
          resetTimer={this.onResetTimer}
          onPlayStopTimer={this.onPlayStopTimer}
        />
        <div className="pomodoro-controller">
          <BreakInterval
            breakInterval={this.state.breakLength}
            increaseBreak={this.onIncreaseBreakLength}
            decreaseBreak={this.onDecreaseBreakLength}
          />
          <SessionLength
            sessionLength={this.state.sessionLength}
            increaseSession={this.onIncreaseSessionLength}
            decreaseSession={this.onDecreaseSessionLength}
          />
        </div>
      </div>
    );
  }
}

export default Pomodoro;
