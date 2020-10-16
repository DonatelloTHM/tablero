import React, { Component } from "react";
import "./NewsComponent.css";

export class NewsComponent extends Component {
  state = {
    animationClass: "swing-in-left-fwd",
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ animationClass: "" });
    }, 500);
  }

  render() {
    return (
      <div className={`news-component ${this.state.animationClass}`}>
        <img className="news-image" src={this.props.newsObj.urlToImage} />
        <h5 className="source-news">{this.props.newsObj.source.name}</h5>
        <div className="news-info">
          <h1 className="news-title">{this.props.newsObj.title}</h1>
          <p className="news-description">{this.props.newsObj.description}</p>
        </div>
      </div>
    );
  }
}

export default NewsComponent;
