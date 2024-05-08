import React from "react";
import "./blog.css";
import Card from "../../components/card/Card";
import { asset } from "../../assets/asset";

function Blog() {
  const cardImgSrc = [
    asset.blog01,
    asset.blog02,
    asset.blog03,
    asset.blog04,
    asset.blog05,
  ];

  function renderCard() {
    const cardData = [];
    for (let i = 0; i < 5; i++) {
      cardData.push(<Card key={i} imgSrc={cardImgSrc[i]} />);
    }
    return cardData;
  }

  return (
    <div className="blog" id="library">
      <div className="blog__intro">
        <p className="blog__title text-gradient">A lot is happening,</p>
        <p className="blog__title text-gradient">We are blogging about it.</p>
      </div>
      <div className="blog__content">{renderCard()}</div>
    </div>
  );
}

export default Blog;
