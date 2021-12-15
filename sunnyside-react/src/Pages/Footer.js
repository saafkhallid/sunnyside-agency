import React from "react";
import logo from "../images/logo.svg";
import facebook from "../images/icon-facebook.svg";
import instagram from "../images/icon-instagram.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";

function Footer() {
  return (
    <div>
      <div className="block-footer1">
        <img src={logo} alt="logo" style={{ backgroundColor: "black" }} />
        <ul>
          <li>
            <a href="#home">About</a>
          </li>
          <li>
            <a href="#news">Services</a>
          </li>
          <li>
            <a href="#contact">Projects</a>
          </li>
        </ul>
      </div>
      <div className="block-footer2">
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={pinterest} alt="pinterest" />
        <img src={twitter} alt="twitter" />
      </div>
    </div>
  );
}

export default Footer;
