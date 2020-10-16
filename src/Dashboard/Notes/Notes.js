import React, { Component } from "react";
import OtherNotes from "./OtherNotes";
import PinnedNotes from "./PinnedNotes";
import "./Notes.css";
import NewNote from "./NewNote";
import moment from "moment";
import NotesColor from "./NotesColor";
import { ReactComponent as Color } from "./svg/colorpalette.svg";
import { ReactComponent as New } from "./svg/new.svg";
import { ReactComponent as Filter } from "./svg/filter.svg";
import FilterNotes from "./FilterNotes";

export class Notes extends Component {
  state = {
    allNotes: [],
    dateFilter: null,
    searchTerm: "",
    filterLabel: "All",
    notesColor: "white",
    chosenF: "",
  };

  componentDidMount() {
    fetch("http://localhost:3000/users/1")
      .then((response) => response.json())
      .then((result) => {
        this.setState({ allNotes: [...this.state.allNotes, ...result.notes] });
        console.log(result);
        console.log(moment(result.notes[1].created_at).format("YYYY-MM-DD"));
      });
  }

  handleNewNote = (newNote) => {
    fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...newNote, user_id: 1 }),
    })
      .then((response) => response.json())
      .then((note) => {
        this.setState({ allNotes: [...this.state.allNotes, note] });
      });
  };

  handlePinned = (id, newState) => {
    fetch(`http://localhost:3000/notes/${id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pinned: newState }),
    })
      .then((response) => response.json())
      .then((result) => {});

    const allNotes = this.state.allNotes.map((note) => {
      if (note.id === id) {
        return { ...note, pinned: newState };
      }
      return note;
    });

    this.setState({ allNotes });
  };

  handleDelete = (id) => {
    fetch(`http://localhost:3000/notes/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => {
        const allNotes = this.state.allNotes.filter((note) => {
          return note.id !== id;
        });

        this.setState({ allNotes });
      });
  };

  handleFilterDate = (dateFilter) => {
    this.setState({ dateFilter });
  };

  handleColorChange = (notesColor) => {
    debugger;
    this.setState({ notesColor });
  };

  handleFilterSearch = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  filterByLabel = () => {
    if (this.state.filterLabel === "All") {
      return this.state.allNotes;
    }
    return this.state.allNotes.filter((note) => {
      return note.label === this.state.filterLabel;
    });
  };

  filterBySearch = () => {
    if (!this.state.searchTerm) {
      return this.filterByLabel();
    }
    return this.filterByLabel().filter((note) => {
      return (
        note.title.toLowerCase().includes(this.state.searchTerm) ||
        note.content.toLowerCase().includes(this.state.searchTerm)
      );
    });
  };

  notesFiltered = () => {
    if (this.state.dateFilter) {
      return this.filterBySearch().filter((note) => {
        return (
          moment(note.created_at).format("YYYY-MM-DD") ===
          moment(this.state.dateFilter).format("YYYY-MM-DD")
        );
      });
    } else {
      return this.filterBySearch();
    }
  };

  handleFilterLabel = (filterLabel) => {
    if (filterLabel === this.state.filterLabel) {
      this.setState({ filterLabel: "All" });
    } else {
      this.setState({ filterLabel });
    }
  };

  handleMenu = (e) => {
    debugger;
    if (this.state.chosenF === e) {
      this.setState({ chosenF: "" });
    } else {
      this.setState({ chosenF: e });
    }
  };

  render() {
    return (
      <div className="notes-container scale-in-br">
        {this.state.chosenF === "new" ? (
          <NewNote handleNewNote={this.handleNewNote} />
        ) : null}
        {this.state.chosenF === "color" ? (
          <NotesColor handleColorChange={this.handleColorChange} />
        ) : null}
        <div className="choose-menu">
          <span onClick={(e) => this.handleMenu("new")}>
            <New
              className={
                this.state.chosenF === "new" ? "menu-active" : "menu-inactive"
              }
            />
          </span>
          <span onClick={(e) => this.handleMenu("filter")}>
            <Filter
              className={
                this.state.chosenF === "filter"
                  ? "menu-active"
                  : "menu-inactive"
              }
            />
          </span>
          <span onClick={(e) => this.handleMenu("color")}>
            <Color
              className={
                this.state.chosenF === "color" ? "menu-active" : "menu-inactive"
              }
            />
          </span>
        </div>
        {this.state.chosenF === "filter" ? (
          <FilterNotes
            handleFilterDate={this.handleFilterDate}
            dateFilterValue={this.state.dateFilter}
            handleFilterSearch={this.handleFilterSearch}
            controlledSearch={this.state.searchTerm}
            handleFilterLabel={this.handleFilterLabel}
            controlledFilterLabel={this.state.filterLabel}
          />
        ) : null}
        <PinnedNotes
          newColor={this.state.notesColor}
          handleDelete={this.handleDelete}
          handlePinned={this.handlePinned}
          allNotes={this.notesFiltered()}
          handleFilterLabel={this.handleFilterLabel}
        />
        <OtherNotes
          newColor={this.state.notesColor}
          handleDelete={this.handleDelete}
          handlePinned={this.handlePinned}
          allNotes={this.notesFiltered()}
          handleFilterLabel={this.handleFilterLabel}
        />
      </div>
    );
  }
}

export default Notes;
