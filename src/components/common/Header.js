import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <nav id="top-bar" className="navbar is-success">
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
    </nav>
    // <div id="top-bar" className="container">
    //   <h1 className="title is-size-1">Freesume</h1>
    //   <p className="subtitle">Free Resume Builder</p>
    //   <hr />
    //   <div id="MainNavigation" className="navbar-menu">
    //     <div className="navbar-start">
    //       <NavLink
    //         exact={true}
    //         className="navbar-item"
    //         to="/"
    //         activeClassName="selected"
    //       >
    //         Home
    //       </NavLink>
    //       <NavLink
    //         className="navbar-item"
    //         to="/resume-templates"
    //         activeClassName="selected"
    //       >
    //         Resume Templates
    //       </NavLink>
    //     </div>
    //   </div>
    //   <hr />
    // </div>
  );
};

export default Header;
