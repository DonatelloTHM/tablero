import React from "react";
import "./ToDoFilter.css";

function ToDoFilter({ handleFilter, activeClass }) {
  return (
    <div className="todo-filter">
      <h1
        className={activeClass === "All" ? "active-filter" : "inactive-filter"}
        onClick={handleFilter}
      >
        All
      </h1>
      <h1
        className={
          activeClass === "Active" ? "active-filter" : "inactive-filter"
        }
        onClick={handleFilter}
      >
        Active
      </h1>
      <h1
        className={
          activeClass === "Completed" ? "active-filter" : "inactive-filter"
        }
        onClick={handleFilter}
      >
        Completed
      </h1>
    </div>
  );
}

export default ToDoFilter;
