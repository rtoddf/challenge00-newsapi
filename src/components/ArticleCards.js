import React from "react";
import Card from "./Card";

const ArticleCards = props => {
  const articles = props.articles.map((article, index) => {
    return <Card key={index} article={article} />;
  });

  return (
    <div className="grid" data-col="3">
      {articles}
    </div>
  );
};

export default ArticleCards;
