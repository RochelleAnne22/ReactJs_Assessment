import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css';
const Header = () => {
  return (
    <header className={"container-fluid"}>
      <nav
        className="navbar navbar-expand-lg navbar-light">
        <NavLink to="/" className="btn btn-outline-dark btn-sm col-xs-2 margin-left">
          Home
        </NavLink>
        <NavLink to="/AddContact" className="btn btn-outline-dark btn-sm col-xs-2 margin-left">
          Add Contact
        </NavLink>
        <NavLink to="/About" className="btn btn-outline-dark btn-sm col-xs-2 margin-left" >
          About
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
