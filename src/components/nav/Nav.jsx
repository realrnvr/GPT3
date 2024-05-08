import React from "react";
import "./nav.css";
import { asset } from "../../assets/asset";

function Nav() {
  return (
    <div className="nav">
      <div className="nav__content">
        <h2 className="nav__title text-gradient">
          Let's Build Something amazing with GPT-3 OpenAI
        </h2>
        <p className="nav__para">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="nav__input">
          <input
            type="email"
            placeholder="Your Email Address"
            className="nav__input-field"
          />
          <button className="nav__button">Get Started</button>
        </div>
        <div className="nav__footer">
          <img className="nav__people-image" src={asset.people} alt="people" />
          <p className="nav__para nav__para--size">
            1,600 people requested access a visit in last 24 hours
          </p>
        </div>
      </div>
      <div className="nav__image">
        <img className="nav__ai-image" src={asset.ai} alt="ai" />
      </div>
    </div>
  );
}

export default Nav;
