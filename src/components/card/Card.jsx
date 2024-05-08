import React from "react";
import "./card.css";

function Card({ imgSrc }) {
  return (
    <div className="card">
      <div className="card__image">
        <img className="card__img" src={imgSrc} alt="blog02" />
      </div>
      <div className="card__content">
        <div className="card-intro">
          <p className="card__text">Sep 26, 2021</p>
          <h3 className="card__title">
            GPT-3 and Open AI is the future. Let us exlore how it is?
          </h3>
        </div>
        <p className="card__text">
          <a className="card__link" href="#read">
            Read Full Article
          </a>
        </p>
      </div>
    </div>
  );
}

export default Card;
