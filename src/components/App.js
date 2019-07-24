import React from "react";
import newsapi from "../api/newsapi";
import SourceSelector from "./SourceSelector";
import ArticleCards from "./ArticleCards";

class App extends React.Component {
  state = { articles: [] };

  onSearchSubmit = async term => {
    const response = await newsapi.get("/v2/top-headlines", {
      params: {
        sources: "cnn"
      }
    });

    this.setState({ articles: response.data.articles });
  };

  render() {
    return (
      <div className="container">
        <SourceSelector />
        <a onClick={this.onSearchSubmit}>news api</a>
        <ArticleCards articles={this.state.articles} />
      </div>
    );
  }
}

export default App;
