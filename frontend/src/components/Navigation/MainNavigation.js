import React from "react";
import { NavLink } from "react-router-dom";

import AuthContext from "../../context/auth-context";
import "./MainNavigation.css";
/* import image1 from "../../img/image1.png"; */

const mainNavigation = props => (
  <AuthContext.Consumer>
    {context => {
      return (
        <header className="main-navigation">
          <div className="main-navigation__logo">
            {/*             <label for="hamburger">&#9776;</label>
            <input type="checkbox" id="hamburger" /> */}
            {/*          <img src={image1}></img> */}
            <h1>✎SpaceArt</h1>
          </div>
          <nav className="main-navigation__items">
            <ul>
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/events">Events</NavLink>
              </li>
              <li>
                <NavLink to="/faq">FAQ</NavLink>
              </li>
              {!context.token && (
                <React.Fragment>
                  <li>
                    <NavLink to="/auth">LogIn</NavLink>
                  </li>
                </React.Fragment>
              )}

              {context.token && (
                <React.Fragment>
                  <li>
                    <NavLink to="/bookings">My Bookings</NavLink>
                  </li>
                  <li>
                    <button onClick={context.logout}>Logout</button>
                  </li>
                </React.Fragment>
              )}
            </ul>
          </nav>
        </header>
      );
    }}
  </AuthContext.Consumer>
);

export default mainNavigation;
