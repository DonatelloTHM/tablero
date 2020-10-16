import React, { Component } from "react";
import WeatherFiveComp from "./WeatherFiveComp";

const APIKEY = process.env.REACT_APP_WEATHER_API_KEY;

export class WeathFive extends Component {
  renderWeatherComp() {
    let renderedArray = [];

    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=New%20York&units=imperial&appid=${APIKEY}`
    )
      .then((response) => response.json())
      .then((weather) => {
        console.log(weather);
        debugger;
        renderedArray = weather.list.map((result) => {
          return (
            <WeatherFiveComp
              temperature={result.main.temp}
              description={result.weather[0].description}
              city={weather.name}
              condition={result.weather[0].main}
            />
          );
        });
        debugger;
      });
    return renderedArray;
  }

  render() {
    return <div>{this.renderWeatherComp()}</div>;
  }
}

export default WeathFive;
