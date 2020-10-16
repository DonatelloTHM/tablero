import React from "react";
import "./ColorComponent.css";

function ComponentColor({ color, changeColor }) {
  return (
    <div
      onClick={(e) => changeColor(color)}
      className="color-comp"
      style={{ backgroundColor: color }}
    ></div>
  );
}

export default ComponentColor;
