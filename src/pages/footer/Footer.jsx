import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__intro">
        <h1 className="footer__title text-gradient">
          Do you want to step in to the future before others
        </h1>
        <button className="footer__button">Request Early Access</button>
      </div>
      <div className="footer__option">
        <div className="footer__content">
          <div className="footer__main">
            <div className="footer__info">
              <h3 className="footer__logo">GPT-3</h3>
              <p className="footer__text footer__text--gpt-width">
                Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
              </p>
            </div>

            <div className="footer__info">
              <h4 className="footer__head footer__head--margin">Links</h4>
              <p className="footer__text footer__text--width">Overons</p>
              <p className="footer__text footer__text--width">Social Media</p>
              <p className="footer__text footer__text--width">Counters</p>
              <p className="footer__text footer__text--width">Contact</p>
            </div>

            <div className="footer__info">
              <h4 className="footer__head footer__head--margin">Company</h4>
              <p className="footer__text footer__text--width">
                Terms & Conditions
              </p>
              <p className="footer__text footer__text--width">Privacy Policy</p>
              <p className="footer__text footer__text--width">Contact</p>
            </div>

            <div className="footer__info">
              <h4 className="footer__head footer__head--margin">
                Get in touch
              </h4>
              <p className="footer__text footer__text--width">
                Crechterwoord K12 182 DK Alknjkcb
              </p>
              <p className="footer__text footer__text--width">085-132567</p>
              <p className="footer__text footer__text--width">info@payme.net</p>
            </div>
          </div>
        </div>
        <p className="footer__text footer__center-align">
          © 2021 GPT-3. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
