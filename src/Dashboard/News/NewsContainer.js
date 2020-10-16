import React, { Component } from "react";
import NewsComponent from "./NewsComponent";
import "./NewsContainer.css";
const APIKEY = process.env.REACT_APP_NEWS_API_KEY;

export class NewsContainer extends Component {
  state = {
    newsResults: [],
    searchTerm: "",
    filterTerm: "",
  };

  componentDidMount() {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${APIKEY}`)
      .then((response) => response.json())
      .then((result) => {
        debugger;
        this.setState({
          newsResults: [...this.state.newsResults, ...result.articles],
        });
      });
  }

  renderNews() {
    return this.state.newsResults.map((news) => (
      <NewsComponent key={news.title} newsObj={news} />
    ));
  }

  handleFiltering = (e) => {
    const idValue = e.target.id;
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${idValue}&apiKey=${APIKEY}`
    )
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          newsResults: [...result.articles],
          filterTerm: idValue,
        });
      });
  };

  handleSearching = (e) => {
    const searchValue = e.target.value;
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${this.state.filterTerm}&q=${searchValue}&apiKey=${APIKEY}`
    )
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          searchTerm: searchValue,
          newsResults: [...result.articles],
        });
      });
  };

  render() {
    return (
      <div>
        <div className="news-container">
          {this.state.newsResults.length ? this.renderNews() : null}
        </div>
        <div className="news-filtering">
          <h2
            onClick={this.handleFiltering}
            id="general"
            className={
              this.state.filterTerm === "general" ? "active-news" : null
            }
          >
            General
          </h2>
          <h2
            onClick={this.handleFiltering}
            id="business"
            className={
              this.state.filterTerm === "business" ? "active-news" : null
            }
          >
            Business
          </h2>
          <h2
            onClick={this.handleFiltering}
            id="entertainment"
            className={
              this.state.filterTerm === "entertainment" ? "active-news" : null
            }
          >
            Entertainment
          </h2>
          <h2
            onClick={this.handleFiltering}
            id="health"
            className={
              this.state.filterTerm === "health" ? "active-news" : null
            }
          >
            Health
          </h2>
          <h2
            onClick={this.handleFiltering}
            id="science"
            className={
              this.state.filterTerm === "science" ? "active-news" : null
            }
          >
            Science
          </h2>
          <h2
            onClick={this.handleFiltering}
            id="technology"
            className={
              this.state.filterTerm === "technology" ? "active-news" : null
            }
          >
            Technology
          </h2>
          <input
            className="news-search"
            onChange={this.handleSearching}
            type="text"
            value={this.state.searchTerm}
            placeholder="Search..."
          />
        </div>
      </div>
    );
  }
}

export default NewsContainer;
