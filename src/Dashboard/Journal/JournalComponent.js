import React, { Component } from "react";
import "./JournalComponent.css";
import moment from "moment";

export class JournalComponent extends Component {
  render() {
    return (
      <div className="journal-component tilt-in-fwd-tl  ">
        <img
          onClick={(e) => this.props.handleDelete(this.props.journal.id)}
          className="delete-journal"
          src="https://img.icons8.com/flat_round/35/000000/delete-sign.png"
        />
        <img
          onClick={(e) => this.props.handleView(this.props.journal)}
          className="show-journal"
          src="https://img.icons8.com/cute-clipart/40/000000/show-property.png"
        />
        <div className="title-content">
          <h2>Title:</h2>
          <h1>{this.props.journal.title}</h1>
        </div>
        <div className="updated-created">
          <h5>
            Created at:{" "}
            {moment(this.props.journal.created_at).format("MMMM Do YYYY")}
          </h5>
          <h5>
            Last Update:{" "}
            {moment(this.props.journal.updated_at)
              // .subtract(-360, "seconds")
              .startOf("seconds")
              .fromNow()}{" "}
          </h5>
        </div>
      </div>
    );
  }
}

export default JournalComponent;
