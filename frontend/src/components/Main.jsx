import React from "react";
import Header from "./Header";
import CarouselBox from "./CarouselBox";
import Cards from "./Cards";
import { CardDeck } from "react-bootstrap";
import Footer from "./Footer";
import Content from "./Content";
import UsersList from "./UsersList";
import About from "./About";

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePageId: 0,
      show: false,
      showRegistration: false,
      isLoggedIn: false,
    };

    this.setPage = this.setPage.bind(this);
    this.getPageComponent = this.getPageComponent.bind(this);
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
  // Компонент отображаюшийся при нажатии на кнопки хедера
  getPageComponent() {
    switch (this.state.activePageId) {
      case 0:
        return <Content />;
      case 1:
        return <About />;
      case 2:
        return <UsersList />;
    }
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
      <React.Fragment>
        <Header
          show={this.state.show}
          showRegistration={this.state.showRegistration}
          isLoggedIn={this.state.isLoggedIn}
          setPage={this.setPage}
          handleShowLogin={this.handleShowLogin}
          handleClose={this.handleClose}
          handleShowRegistration={this.handleShowRegistration}
          handleCloseRegistration={this.handleCloseRegistration}
          onLoginSuccesses={this.onLoginSuccesses}
          onLogout={this.onLogout}
        />

        {this.getPageComponent()}

        <Footer />
      </React.Fragment>
    );
  }
}
