import React, { Component } from "react";
import { ReactComponent as WindSVG } from "./weathersvg/wind.svg";
import { ReactComponent as SnowSVG } from "./weathersvg/snow.svg";
import { ReactComponent as RainSVG } from "./weathersvg/rain.svg";
import { ReactComponent as CloudSVG } from "./weathersvg/cloud.svg";
import { ReactComponent as ClearSVG } from "./weathersvg/clear.svg";
import { ReactComponent as MistSVG } from "./weathersvg/mist.svg";
import "./Weather.css";
import ReactAnimatedWeather from "react-animated-weather";
const APIKEY = process.env.REACT_APP_WEATHER_API_KEY;

export class Weather extends Component {
  state = {
    condition: "",
    temperature: "",
    city: "",
    description: "",
  };

  handleCondition = () => {
    switch (this.state.condition) {
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

  componentDidMount() {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${"New York"}&units=imperial&appid=${APIKEY}`
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result.weather[0].main);
        this.setState({
          temperature: result.main.temp,
          description: result.weather[0].description,
          city: result.name,
          condition: result.weather[0].main,
        });
      });
  }

  render() {
    return (
      <div className="weather-comp">
        <h5 className="weather-city">{this.state.city}</h5>
        <ReactAnimatedWeather
          icon={this.handleCondition()}
          color={"white"}
          size={128}
          animate={true}
        />
        <h2 className="weather-temperature">{this.state.temperature} ºF</h2>
        <h6 className="weather-description">{this.state.description}</h6>
      </div>
    );
  }
}

export default Weather;
