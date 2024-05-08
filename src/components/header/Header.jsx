import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./header.css";
import Menu from "../menu/Menu";
import Btn from "../button/Btn";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(true);

  function handleClick() {
    setToggleMenu((prevToggleMenu) => !prevToggleMenu);
  }

  return (
    <div className="header">
      <h2 className="header__title">GPT-3</h2>
      <div className="header__navbar">
        <Menu />
      </div>
      <div className="header__buttons">
        <Btn />
      </div>
      <div className="header__line">
        {toggleMenu ? (
          <RiMenu3Line size={27} color="#fff" onClick={handleClick} />
        ) : (
          <RiCloseLine size={27} color="#fff" onClick={handleClick} />
        )}
      </div>
      {!toggleMenu && (
        <div className="header__pop-menu">
          <Menu />
          <div className="header__pop-btn">
            <Btn />
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
