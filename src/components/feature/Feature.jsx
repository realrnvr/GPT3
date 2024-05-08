import React from "react";
import "./feature.css";
import { asset } from "../../assets/asset";

function Feature() {
  return (
    <div className="feature">
      <img className="feature__image" src={asset.google} alt="google" />
      <img className="feature__image" src={asset.slack} alt="slack" />
      <img className="feature__image" src={asset.atlassian} alt="atlassian" />
      <img className="feature__image" src={asset.dropbox} alt="dropbox" />
      <img className="feature__image" src={asset.shopify} alt="shopify" />
    </div>
  );
}

export default Feature;
