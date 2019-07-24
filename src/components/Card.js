import React from "react";
import "./card.css";

const Card = props => {
  console.log("props.article: ", props.article);

  return (
    <article className="panel">
      <figure>
        <div className="filler">
          <img src={props.article.urlToImage} alt={props.article.title} />
        </div>
      </figure>
      <div className="content">
        <h3>{props.article.title}</h3>
        <p>{props.article.description}</p>
      </div>
    </article>
  );
};

export default Card;
