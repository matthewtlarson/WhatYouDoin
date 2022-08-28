import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
            <li className="mx-3 mt-2 p-1">
              {/* this is not using the Link component to logout or user and then refresh the application to the start */}
              <a style={{color:'#541675'}} href="/" onClick={() => Auth.logout()}>
                Logout
              </a>
            </li>
            <li className="mt-2 p-1">
              <Link to="/orderHistory" style={{color:'#541675'}}>Test Tab</Link>
            </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
            <li className="ml-3 mt-2 p-1">
              <Link to="/login" style={{color:'#541675'}}>
                Login
              </Link>
            </li>
            <li className="ml-3 mt-2 p-1">
              <Link to="/signup" style={{color:'#541675'}}>
                Signup
              </Link>
            </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-5 justify-content-end" style={{height: '100px', backgroundColor: '#F5F5F5'}}>
      <h1>
        <Link to="/" style={{ textDecoration: "none" }}>
          <img
            src={logo}
            alt="logo"
            className="mt-1 mx-1 position-absolute top-0 start-0"
          />
        </Link>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
