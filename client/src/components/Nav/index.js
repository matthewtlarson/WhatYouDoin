import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <button type="button" className="btn btn-warning mt-4">
            <li className="mx-3 mt-2 p-1">
              {/* this is not using the Link component to logout or user and then refresh the application to the start */}
              <a href="/" onClick={() => Auth.logout()}>
                Logout
              </a>
            </li>
          </button>
          <button type="button" className="btn btn-warning mt-4">
            <li className=" mt-2 p-1">
              <Link to="/orderHistory">Test Tab</Link>
            </li>
          </button>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <button type="button" className="btn btn-warning mt-4">
            <li className="ml-3 mt-2 p-1">
              <Link to="/login" style={{ textDecoration: "none" }}>
                Login
              </Link>
            </li>
          </button>
          <button type="button" className="btn btn-warning mt-4">
            <li className="ml-3 mt-2 p-1">
              <Link to="/signup" style={{ textDecoration: "none" }}>
                Signup
              </Link>
            </li>
          </button>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-5 justify-content-end">
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
