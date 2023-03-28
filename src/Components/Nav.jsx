import React from "react";
import { NavLink } from "react-router-dom";
export default function Nav() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink className="nav-logo" to="/">
          LOGO
        </NavLink>
        <div>
          <ul className="nav-menu">
            <li>
              <NavLink className="nav-item " to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-item" to="/BookList">
                Books
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
