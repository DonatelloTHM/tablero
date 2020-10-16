import React, { useState } from "react";
import "./NoteComponent.css";
import ComponentColor from "./ComponentColor";

function NoteComponent({
  noteObj,
  handlePinned,
  handleDelete,
  handleFilterLabel,
  allColors,
}) {
  const [colorPick, setColorPick] = useState(false);
  const [newColor, setNewColor] = useState("");

  const changeColor = (newState) => {
    setNewColor(newState);
    setColorPick(false);
  };

  const renderColor = () => {
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
      return <ComponentColor changeColor={changeColor} color={color} />;
    });
  };

  return (
    <div
      style={
        newColor
          ? { backgroundColor: newColor }
          : { backgroundColor: allColors }
      }
      className="note-component scale-in-ver-top"
    >
      <h1>{noteObj.title}</h1>
      <p spellCheck={false} contentEditable={true}>
        {noteObj.content}
      </p>
      <h5
        onClick={(e) => handleFilterLabel(noteObj.label)}
        className={noteObj.label}
      >
        {noteObj.label}
      </h5>
      <img
        onClick={() => handlePinned(noteObj.id, !noteObj.pinned)}
        className="pinned-icon"
        src={
          noteObj.pinned
            ? "https://img.icons8.com/ios-glyphs/30/000000/pin3.png"
            : "https://img.icons8.com/windows/30/000000/pin3.png"
        }
      />
      <img
        className="change-color"
        onClick={() => setColorPick(!colorPick)}
        src="https://img.icons8.com/pastel-glyph/30/000000/color-palette.png"
      />
      <img
        onClick={() => handleDelete(noteObj.id)}
        className="delete-note"
        src="https://img.icons8.com/pastel-glyph/30/000000/cancel.png"
      />
      {colorPick ? (
        <div className="color-box fade-in">{renderColor()}</div>
      ) : null}
    </div>
  );
}

export default NoteComponent;
