import React, { useState } from "react";
import "./CSS/Navbar.css"; // Import CSS

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handleToggle2 = () => {
    setIsPanelOpen(!isPanelOpen);
  };
  return (
    <div>
      {/* Navbar button for small screens */}
      <button className="navbar-button" onClick={(handleToggle, handleToggle2)}>
        ☰
      </button>

      {/* Side panel */}
      <div className={`side-panel ${isPanelOpen ? "open" : ""}`}>
        <button
          className="close-button"
          onClick={(handleToggle, handleToggle2)}
        >
          <a href="#">HARRY POTTER</a>
        </button>
        <ul>
          <li>
            <a href="#">Tool</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#contact">login</a>
          </li>
        </ul>
      </div>

      {/* Navbar content */}
      <div className={`navbar ${isVisible ? "visible" : ""}`}>
        <ul>
          <li>
            <a href="#home">Tool</a>
          </li>
          <li>
            <a href="#about">Pricing</a>
          </li>
          <li>
            <a href="#services">Support</a>
          </li>
          <li className="loginbtn">
            <a href="#contact">Login</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
