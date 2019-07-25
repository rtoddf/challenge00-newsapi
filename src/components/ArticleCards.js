import React from "react";
import Header from "./Header";
import Card from "./Card";

const ArticleCards = props => {
  const articles = props.articles.map((article, index) => {
    return <Card key={index} article={article} />;
  });

  return (
    <div className="grid">
      <Header src={props.articles[0]} />
      <div className="grid" data-col="3">
        {articles}
      </div>
    </div>
  );
};

export default ArticleCards;
