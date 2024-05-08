import React from "react";
import "./glimse.css";

function Glimse({ title, text }) {
  return (
    <>
      <div className="glimse">
        <div className="glimse__wrapper">
          <div className="glimse__line-gradient"></div>
          <h3 className="glimse__title">{title}</h3>
        </div>
        <p className="glimse__text">{text}</p>
      </div>
    </>
  );
}

export default Glimse;
