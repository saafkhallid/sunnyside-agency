import React from "react";

function Menu() {
  return (
    <div>
      <div className="menu-header">
        <div className="liste-logo">
          <ul>
            <li>
              <a href="#logo">sunnyside</a>
            </li>
          </ul>
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
    </div>
  );
}

export default Menu;
