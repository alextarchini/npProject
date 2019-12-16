import React, { Component } from "react";

import image1 from "../img/img2.jpeg";
/* import Modal from "../components/Modal/Modal";
import Backdrop from "../components/Backdrop/Backdrop";
import EventList from "../components/Events/EventList/EventList";
import Spinner from "../components/Spinner/Spinner";
import AuthContext from "../context/auth-context"; */
import "./Home.css";
import "./Events.js";
import "./FAQ.js";

class HomePage extends Component {
  render() {
    return (
      <div class="start">
        <header class="showcase">
          <div class="content">
            <div class="title">Welcome To SpaceArt!</div>
            <div class="text">The new co-working space for creatives</div>
          </div>
        </header>

        <section class="services bg-green">
          <div class="container grid-3 center">
            <div>
              {/* <i class="fab fa-youtube fa-3x"></i> */}
              <h3>YouTube</h3>
              <p>Follow our latest DYI creative tutorials on YouTube! </p>
              <button id="action-btn">
                <a href="./FAQ.js">Subscribe</a>
              </button>
            </div>
            <div>
              <i class="fas fa-chalkboard-teacher fa-3x"></i>
              <h3>Workshops</h3>
              <p>Try our creative workshops! </p>
              <br />
              <button id="action-btn" href="./Events.js">
                <a href="./Events.js">Enroll here!</a>
              </button>
            </div>
            <div>
              {/* <i class="fas fa-briefcase fa-3x"></i> */}
              <h3>Freelancing Projects</h3>
              <p>
                Feeling Brave? Come to SpaceArt and Organise Creative Worshops.
              </p>
              <button id="action-btn" href="./Events.js">
                <a href="./Events.js"> Register here!</a>
              </button>
            </div>
          </div>
        </section>

        <section /* class="about bg-dark" */>
          <div class="container">
            <div class="grid-2">
              <div class="center">
                <h3>About Us</h3>
                <p>
                  Our mission is to minimize the time it takes to turn vision
                  into reality.
                  <div class="pic">
                    {/*          <img src={image1}></img> */}
                  </div>
                </p>
              </div>
              <div>
                <ul>
                  <li>Helping artists reach and maintain creative flow</li>
                  <li>
                    Providing engineers better tools to design, implement, and
                    communicate solutions
                  </li>
                  <li>
                    Giving businesses and users control over their data and
                    insight into how it is used
                  </li>
                  <li>
                    Starting and maintaining an open and continuous dialogue
                    with our customers
                  </li>
                  <li>
                    Adapting our business and solutions to how the industry
                    works
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HomePage;
