import React from "react";

const Card = props => {
  console.log("props.article: ", props.article);

  return (
    <div>
      <img src={props.article.urlToImage} alt={props.article.title} />
      <h4>{props.article.title}</h4>
      <p>{props.article.description}</p>
      <hr />
    </div>
  );
};

export default Card;
