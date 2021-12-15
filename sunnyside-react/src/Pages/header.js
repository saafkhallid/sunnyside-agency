import React from "react";
import logo from "../images/logo.svg";


function Menu() {
  return (
    <div>
      <div className="menu-header">
             <img src={logo} alt="logo" style={{ backgroundColor:'black' }} />
        </div>
        <div className="liste-menu">
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
            <li>
              <a href="#about">Contacts</a>
            </li>
          </ul>
        </div>

        <div className="liste-titre">
          <h1> We are creatives</h1>
        </div>
      </div>
  );
}

export default Menu;
