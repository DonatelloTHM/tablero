import React from "react";
import "./ColorComponent.css";

function ColorComponent({ color, handleColorChange }) {
  return (
    <div
      onClick={(e) => handleColorChange(color)}
      className="color-comp"
      style={{ backgroundColor: color }}
    ></div>
  );
}

export default ColorComponent;
