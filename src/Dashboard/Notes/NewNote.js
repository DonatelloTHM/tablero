import React, { Component } from "react";
import "./NewNote.css";
export class NewNote extends Component {
  state = {
    title: "",
    note: "",
    label: "",
    pinned: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleNewNote(this.state);
    this.setState({ title: "", note: "", label: "", pinned: false });
  };

  handleForm = (e) => {
    if (e.target.name === "pinned") {
      this.setState((prevState) => ({ pinned: !prevState.pinned }));
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  render() {
    return (
      <div className="new-notes scale-in-br">
        <form onSubmit={this.handleSubmit} className="new-notes-form">
          <input
            onChange={this.handleForm}
            className="new-note-text"
            name="title"
            value={this.state.title}
            type="text"
            placeholder="Title"
          />
          <textarea
            onChange={this.handleForm}
            name="note"
            className="new-note-content"
            cols="30"
            rows="10"
            value={this.state.note}
          />
          <div className="submit-select">
            <select
              onChange={this.handleForm}
              name="label"
              className={`select-label ${this.state.label}`}
              defaultValue="Choose label"
            >
              <option value="Choose label" disabled>
                Choose label
              </option>
              <option value="personal">Personal</option>
              <option value="work">Work</option>
              <option value="inspirational">Inspirational</option>
            </select>
            <label className="checkbox-label" htmlFor="pinned">
              <input
                onChange={this.handleForm}
                type="checkbox"
                name="pinned"
                checked={this.state.pinned}
              />
              Pinned
            </label>
            <input className="new-note-submit" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default NewNote;
