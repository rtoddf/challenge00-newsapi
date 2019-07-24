import React from "react";
import SourceSelector from "./SourceSelector";
import ArticleCards from "./ArticleCards";
import newsapi from "../api/newsapi";

class App extends React.Component {
  state = { articles: [], term: "abc-news" };

  componentDidMount = () => {
    this.onSearchSubmit(this.state.term);
  };

  onSearchSubmit = async term => {
    const response = await newsapi.get("/v2/top-headlines", {
      params: {
        sources: term
      }
    });

    this.setState({ articles: response.data.articles });
  };

  render() {
    return (
      <div className="container">
        <SourceSelector onChange={this.onSearchSubmit} />
        <ArticleCards articles={this.state.articles} />
      </div>
    );
  }
}

export default App;
