import React, { Component } from "react";
import "./JournalsFilter.css";

export class JournalsFilter extends Component {
  render() {
    return (
      <div className="journal-form-parent">
        <form class="journal-filter-form">
          <input
            onChange={(e) => this.props.handleFilter(e.target.value)}
            className="journal-filter"
            type="text"
            value={this.props.controlledSearch}
            placeholder="Search..."
          />

          <select
            onChange={(e) => this.props.handleSort(e.target.value, e.target)}
            className="sort-journals"
            name="label"
            defaultValue=""
          >
            <option value="" disabled>
              Sort By:
            </option>
            <option value="created_at DESC">Created Date - Descending</option>
            <option value="created_at ASC">Created Date - Ascending</option>
            <option value="updated_at DESC">Updated - Descending</option>
            <option value="updated_at ASC">Updated - Ascending</option>
          </select>
        </form>
      </div>
    );
  }
}

export default JournalsFilter;
