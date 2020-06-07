import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import UsersList from "./UsersList";
import About from "./About";
import Blog from './Blog'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./style.css";

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePageId: 0,
      show: false,
      showRegistration: false,
      isLoggedIn: false,
      pages: [
        {pageId: 0, name: "Home", path: "/"},
        {pageId: 1, name: "About", path: "/about"},
        {pageId: 2, name: "Users", path: "/users"},
        {pageId: 3, name: "Blog", path: "/blog"},
      ],
    };

    this.setPage = this.setPage.bind(this);
    // this.getPageComponent = this.getPageComponent.bind(this);
    this.handleShowLogin = this.handleShowLogin.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShowRegistration = this.handleShowRegistration.bind(this);
    this.handleCloseRegistration = this.handleCloseRegistration.bind(this);
    this.onLoginSuccesses = this.onLoginSuccesses.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  setPage(pageId) {
    this.setState({
      activePageId: pageId,
    });
  }

  // ==================================

  handleShowLogin() {
    this.setState({
      show: true,
    });
  }

  handleClose() {
    this.setState({
      show: false,
    });
  }

  handleShowRegistration() {
    this.setState({
      showRegistration: true,
    });
  }

  handleCloseRegistration() {
    this.setState({
      showRegistration: false,
    });
  }

  onLoginSuccesses() {
    this.setState({
      isLoggedIn: true,
      show: false,
    });
  }

  onLogout() {
    this.setState({
      isLoggedIn: false,
    });
  }

  render() {
    return (
      <>
        <div className="for_footer">
          <Router>
            <Header
              {...this.state}
              setPage={this.setPage}
              handleShowLogin={this.handleShowLogin}
              handleClose={this.handleClose}
              handleShowRegistration={this.handleShowRegistration}
              handleCloseRegistration={this.handleCloseRegistration}
              onLoginSuccesses={this.onLoginSuccesses}
              onLogout={this.onLogout}
            />

            <Switch>
              <Route path="/blog">
                <Blog/>
              </Route>
              <Route path="/users">
                <UsersList/>
              </Route>
              <Route path="/about">
                <About/>
              </Route>
              <Route path="/" exact>
                <Content/>
              </Route>
            </Switch>
          </Router>
        </div>
        <Footer/>

      </>
    );
  }
}
