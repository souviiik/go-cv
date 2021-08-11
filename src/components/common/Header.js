import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <div id="top-bar" className="container">
      <h1 className="title is-size-1">Freesume</h1>
      <p className="subtitle">Free Resume Builder</p>
      <hr />
      <div id="MainNavigation" className="navbar-menu">
        <div className="navbar-start">
          <NavLink
            exact={true}
            className="navbar-item"
            to="/"
            activeClassName="selected"
          >
            Home
          </NavLink>
          <NavLink
            className="navbar-item"
            to="/resume-templates"
            activeClassName="selected"
          >
            Resume Templates
          </NavLink>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;
