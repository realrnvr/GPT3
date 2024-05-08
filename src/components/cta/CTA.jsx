import React from "react";
import "./cta.css";

function CTA() {
  return (
    <div className="cta margin-default">
      <div className="cta__intro">
        <p className="cta__text">Request Early Access to Get Started</p>
        <h2 className="cta__title">
          Register today & start exploring the endless possiblities.
        </h2>
      </div>
      <button className="cta__button">Get Started</button>
    </div>
  );
}

export default CTA;
