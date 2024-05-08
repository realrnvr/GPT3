import React from "react";
import "./possibility.css";
import { asset } from "../../assets/asset";

function Possibility() {
  return (
    <div className="possibility padding-default" id="casestudies">
      <div className="possibility__image">
        <img
          className="possibility__img"
          src={asset.possibility}
          alt="possibility"
        />
      </div>
      <div className="possibility__extras">
        <p className="possibility__text">Request Early Access to Get Started</p>
        <h2 className="possibility__title text-gradient">
          The possibilities are beyond your imagination
        </h2>
        <p className="possibility__text possibility__text--b-color">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <p className="possibility__text possibility__text--o-color">
          Request Early Access to Get Started
        </p>
      </div>
    </div>
  );
}

export default Possibility;
