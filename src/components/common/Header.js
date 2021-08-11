import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <nav id="top-bar" className="navbar is-success">
      <div className="container">
        <div className="navbar-brand">
          <NavLink className="navbar-item" to="/">
            Freesume
          </NavLink>
          <div
            className="navbar-burger"
            data-target="navMenuColorsuccess-example"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navMenuColorsuccess-example" className="navbar-menu">
          <div className="navbar-start">
            <NavLink className="navbar-item" to="/">
              Home
            </NavLink>
            <NavLink className="navbar-item" to="/resume-templates">
              Resume Templates
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
