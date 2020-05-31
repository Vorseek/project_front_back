import React from "react";
import Header from "./Header";
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
    };

    this.setPage = this.setPage.bind(this);
    this.getPageComponent = this.getPageComponent.bind(this);
  }

  setPage(pageId) {
    this.setState({
      activePageId: pageId,
    });
  }

  getPageComponent() {
    switch (this.state.activePageId) {
      case 0:
        return <Content />;

      case 1:
        return <About />;
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header setPage={this.setPage} />

        {this.getPageComponent()}

        <Footer />
      </React.Fragment>
    );
  }
}
