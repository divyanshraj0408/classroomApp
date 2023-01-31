import add from "../assets/add.svg"
import "./navbar.css";
import React from "react";
// import { Link } from "react-router-dom";
function navbar() {
    return (
        <div>
      <nav>
        <div className="navbar">
          <div className="nav-container container">
            <ul className="padding">
              <li>Classroom</li>
            </ul>
            <ul className="row navbar-link padding">
             <img className="addLogo" id="addLogo" src={add} alt="" />
             <div className="dropdown" id="dropdown">
              <li>Create class</li>
              <li>Join Class</li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
     );
}
export default navbar;