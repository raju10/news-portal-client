import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import menuItems from "./MenuItems";
import "./Navbar.css";
const Navbar = () => {
  const [click, setClick] = useState();
  const clickHandler = () => {
    setClick(!click);
  };
  return (
    <div>
      <nav className="heading_navbar">
        <div className="nev-center containers">
          <h1 className="logo">CUSTOMLOGO</h1>

          <ul className={click ? "nav-list active" : "nav-list"}>
            {menuItems.map(({ id, title, cName }) => (
              <li key={id} className="nav-item">
                <p className={cName}>{title}</p>
              </li>
            ))}
          </ul>
          <div onClick={clickHandler} className="hamburger">
            {click ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
