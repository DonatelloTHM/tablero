import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "./FilterNotes.css";

import "react-datepicker/dist/react-datepicker.css";

export default class FilterNotes extends Component {
  render() {
    return (
      <div className="notes-filter scale-in-bl">
        <input
          onChange={this.props.handleFilterSearch}
          className="filter-text"
          type="text"
          value={this.props.controlledSearch}
          placeholder="Search..."
        />

        <select
          onChange={(e) => this.props.handleFilterLabel(e.target.value)}
          name="label"
          defaultValue=""
        >
          <option value="" disabled>
            Filter by label
          </option>
          <option value="personal">Personal</option>
          <option value="work">Work</option>
          <option value="inspirational">Inspirational</option>
          <option value="All">All</option>
        </select>
        <div>
          <DatePicker
            className="date-filter-styling"
            selected={this.props.dateFilterValue}
            onChange={(date) => this.props.handleFilterDate(date)}
            isClearable
            placeholderText="Filter by Date!"
          />
        </div>
      </div>
    );
  }
}
