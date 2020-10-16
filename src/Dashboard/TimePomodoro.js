import React, { Component } from "react";
import "./TimePomodoro.css";
import moment from "moment";

export class TimePomodoro extends Component {
  state = {
    time: moment().format("h:mm"),
    date: moment().format("MMMM Do YYYY"),
    seconds: moment().format("ss"),
    timeClass: "",
    styleClass: "",
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: moment().format("h:mm"),
        date: moment().format("MMMM Do YYYY"),
        seconds: moment().format("ss"),
        styleClass: "flip-in-ver-right",
      });
    }, 1000);
  }

  render() {
    return (
      <div className={`time rotate-in-2-cw`}>
        <div onClick={this.props.switchClock} className="time-seconds">
          <h1 className="time-h1">{this.state.time}</h1>
          <h6 className="time-seconds">{this.state.seconds}</h6>
        </div>
        <h5 className="time-date">{this.state.date}</h5>
      </div>
    );
  }
}

export default TimePomodoro;
