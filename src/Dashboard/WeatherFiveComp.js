import React, { Component } from "react";
import ReactAnimatedWeather from "react-animated-weather";

export class WeatherFiveComp extends Component {
  handleCondition = () => {
    switch (this.props.condition) {
      case "Drizzle":
        return "RAIN";
      case "Rain":
        return "RAIN";
      case "Snow":
        return "SNOW";
      case "Clouds":
        return "CLOUDY";
      case "Clear":
        return "CLEAR_DAY";
      case "":
        return null;
      default:
        return "FOG";
    }
  };

  render() {
    return (
      <div>
        <div class="weather-comp">
          <h5 className="weather-city">{this.props.city}</h5>
          <ReactAnimatedWeather
            icon={this.handleCondition()}
            color={"white"}
            size={128}
            animate={true}
          />
          <h2 className="weather-temperature">{this.props.temperature} ºF</h2>
          <h6 className="weather-description">{this.props.description}</h6>
        </div>
      </div>
    );
  }
}

export default WeatherFiveComp;
