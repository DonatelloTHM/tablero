import React, { Component } from "react";
import NoteComponent from "./NoteComponent";
import "./OtherNotes.css";
import Masonry from "react-masonry-css";

export class OtherNotes extends Component {
  filterAndMap = () => {
    return this.props.allNotes
      .filter((note) => !note.pinned)
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
  breakpointColumnsObj = {
    default: 5,
    1400: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  render() {
    return (
      <div className="other-notes">
        <Masonry
          breakpointCols={this.breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {this.filterAndMap()}
        </Masonry>
      </div>
    );
  }
}

export default OtherNotes;
