import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import HomePage from "./pages/Home";
import FAQPage from "./pages/FAQ";
import AuthPage from "./pages/Auth";
import BookingsPage from "./pages/Bookings";
import EventsPage from "./pages/Events";
import MainNavigation from "./components/Navigation/MainNavigation";
import AuthContext from "./context/auth-context";
import Footer from "./components/Footer/Footer";

import "./App.css";

class App extends Component {
  state = {
    navbarOpen: false,
    token: null,
    userId: null
  };
  /* new */
  handleNavBar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  };

  /* old */
  login = (token, userId, tokenExpiration) => {
    this.setState({ token: token, userId: userId });
  };

  logout = () => {
    this.setState({ token: null, userId: null });
  };

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <AuthContext.Provider
            value={{
              token: this.state.token,
              userId: this.state.userId,
              login: this.login,
              logout: this.logout
            }}
          >
            <MainNavigation />
            <main className="main-content">
                                  
              {/*            <Route path="/home" component={HomePage} />
                         
                <Route path="/auth" component={AuthPage} />
                              
                <Route path="/events" component={EventsPage} />
                              
                <Route path="/bookings" component={BookingsPage} /> */}
              <Switch>
                {this.state.token && <Route path="/auth" /> && (
                  <Redirect from="/auth" to="/home" exact />
                )}

                {this.state.token && (
                  <Route path="/home" component={HomePage} />
                )}

                {!this.state.token && (
                  <Route path="/home" component={HomePage} />
                )}
                {!this.state.token && (
                  <Route path="/auth" component={AuthPage} />
                )}
                <Route path="/events" component={EventsPage} />
                <Route path="/faq" component={FAQPage} />
                {this.state.token && (
                  <Route path="/bookings" component={BookingsPage} />
                )}
                {!this.state.token && <Redirect to="/auth" exact />}
              </Switch>
              <Footer />
            </main>
          </AuthContext.Provider>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
