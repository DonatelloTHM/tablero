import React, { Component } from "react";
import JournalEditor from "./JournalEditor";
import AllJournals from "./AllJournals";
import "./JournalPage.css";
import axios from "axios";
import JournalsFilter from "./JournalsFilter";

export class JournalPage extends Component {
  state = {
    journals: [],
    activeContent: "",
    activeTitle: "",
    activeId: 0,
    activeUnformatted: "",
    pageNumber: 0,
    hasMore: true,
    filterPhrase: "",
    sortingValue: "",
    orderValue: "",
  };

  fetchData = () => {
    debugger;

    axios
      .get(
        `http://localhost:3000/journals?sort=${this.state.sortingValue}&order=${this.state.orderValue}&phrase=${this.state.filterPhrase}&page=${this.state.pageNumber}`
      )
      .then((res) => {
        debugger;
        this.setState({
          //updating data
          journals: [...this.state.journals, ...res.data],
          pageNumber: this.state.pageNumber + 1,
        });
      });
  };

  handleUpdate = (newState) => {
    fetch(`http://localhost:3000/journals/${this.state.activeId}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...newState }),
    })
      .then((response) => response.json())
      .then((result) => {
        const journals = this.state.journals.map((journal) => {
          if (journal.id === newState.id) {
            return { ...journal, ...result };
          }
          return journal;
        });

        this.setState({ journals });
      });
  };

  handleView = (journal) => {
    this.setState({
      activeContent: journal.content,
      activeTitle: journal.title,
      activeId: journal.id,
      activeUnformatted: journal.unformatted,
    });
  };

  componentDidMount() {
    // fetch("http://localhost:3000/user_journals/1")
    //   .then((response) => response.json())
    //   .then((result) => {
    //     this.setState({ journals: [...this.state.journals, ...result] });
    //   });

    this.fetchData();
  }

  handleFilter = (filterPhrase) => {
    fetch(
      `http://localhost:3000/journals?sort=${this.state.sortingValue}&order=${
        this.state.orderValue
      }&phrase=${filterPhrase}&page=${0}`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          journals: [...data],
          filterPhrase: filterPhrase,
          pageNumber: 1,
        });
      });
  };

  handleSort = (value) => {
    const sorting = value.split(" ");
    debugger;
    fetch(
      `http://localhost:3000/journals?sort=${sorting[0]}&order=${
        sorting[1]
      }&phrase=${this.state.filterPhrase}&page=${0}`
    )
      .then((res) => res.json())
      .then((data) => {
        debugger;
        this.setState({
          journals: [...data],
          sortingValue: sorting[0],
          orderValue: sorting[1],
          pageNumber: 1,
        });
      });
  };

  handlePostJournal = (newJournal) => {
    fetch("http://localhost:3000/journals", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...newJournal,
        user_id: 1,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        this.setState({ journals: [...this.state.journals, result] });
      });
  };

  handleDelete = (id) => {
    fetch(`http://localhost:3000/journals/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => {
        const journals = this.state.journals.filter((journal) => {
          return journal.id !== id;
        });

        this.setState({
          journals: journals,
          activeContent: "",
          activeTitle: "",
          activeId: 0,
          activeUnformatted: "",
        });
      });
  };

  render() {
    return (
      <div className="journal-page scale-in-br">
        <div>
          <JournalsFilter
            handleFilter={this.handleFilter}
            handleSort={this.handleSort}
          />
          <AllJournals
            fetchData={this.fetchData}
            handleView={this.handleView}
            journals={this.state.journals}
            handleDelete={this.handleDelete}
            hasMore={this.state.hasMore}
          />
        </div>
        <JournalEditor
          handlePostJournal={this.handlePostJournal}
          content={this.state.activeContent}
          id={this.state.activeId}
          handleUpdate={this.handleUpdate}
          title={this.state.activeTitle}
          handleView={this.handleView}
        />
      </div>
    );
  }
}

export default JournalPage;
