import React from "react";
import "./menu.css";

function Menu() {
  return (
    <>
      <p className="option">
        <a href="#home" className="option__link">
          Home
        </a>
      </p>
      <p className="option">
        <a href="#whatisgpt3" className="option__link">
          What is GPT3?
        </a>
      </p>
      <p className="option">
        <a href="#openai" className="option__link">
          Open AI
        </a>
      </p>
      <p className="option">
        <a href="#casestudies" className="option__link">
          Case Studies
        </a>
      </p>
      <p className="option">
        <a href="#library" className="option__link">
          Library
        </a>
      </p>
    </>
  );
}

export default Menu;
