import React from "react";
import newsapi from "../api/newsapi";
import ArticleCards from "./ArticleCards";

class App extends React.Component {
  state = { articles: [] };

  onSearchSubmit = async term => {
    const response = await newsapi.get("/v2/top-headlines", {
      params: {
        sources: "the-washington-post"
      }
    });

    this.setState({ articles: response.data.articles });
  };

  render() {
    return (
      <div>
        <a onClick={this.onSearchSubmit}>news api</a>
        <ArticleCards articles={this.state.articles} />
      </div>
    );
  }
}

export default App;
