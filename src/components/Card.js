import React from "react";
import DateTime from "./DateTime";
import "./card.css";

const Card = props => {
  console.log("props.article: ", props.article);

  return (
    <article className="panel">
      <figure>
        <div className="filler">
          <a href={props.article.url} target="_blank">
            <img src={props.article.urlToImage} alt={props.article.title} />
          </a>
        </div>
      </figure>
      <div className="content">
        <a href={props.article.url} target="_blank">
          <h3>{props.article.title}</h3>
        </a>
        <p>
          <DateTime publishedAt={props.article.publishedAt} />
        </p>
        <p>{props.article.description}</p>
      </div>
    </article>
  );
};

export default Card;
