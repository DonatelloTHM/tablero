import React, { Component } from "react";
import NoteComponent from "./NoteComponent";
import "./PinnedNotes.css";

export class PinnedNotes extends Component {
  filterAndMap = () => {
    return this.props.allNotes
      .filter((note) => note.pinned)
      .map((note) => {
        return (
          <NoteComponent
            allColors={this.props.newColor}
            key={note.id}
            noteObj={note}
            handlePinned={this.props.handlePinned}
            handleDelete={this.props.handleDelete}
            handleFilterLabel={this.props.handleFilterLabel}
          />
        );
      })
      .reverse();
  };
  render() {
    return <div className="pinned-components">{this.filterAndMap()}</div>;
  }
}

export default PinnedNotes;
