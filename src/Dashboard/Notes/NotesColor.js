import React, { Component } from "react";
import ColorComponent from "./ColorComponent";
import "./NotesColor.css";

export class NotesColor extends Component {
  renderColor = () => {
    return [
      "#cff1ef",
      "#fce2ce",
      "#f3ecb8",
      "#fcfafa",
      "#dcedc1",
      "#e5e5e5",
      "#ffcece",
      "#cdffeb",
      "#bad7df",
    ].map((color) => {
      return (
        <ColorComponent
          handleColorChange={this.props.handleColorChange}
          color={color}
        />
      );
    });
  };

  render() {
    return (
      <div className="color-container scale-in-br">{this.renderColor()}</div>
    );
  }
}

export default NotesColor;
