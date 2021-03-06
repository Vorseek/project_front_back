import React from "react";
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import ModalLogin from "./ModalLogin";
import ModalRegistration from "./ModalRegistration";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Header(props) {


  const renderMenu = () => {
    return props.pages.map((page, i) => {
      return (
        <Button variant="outline-dark" key={i}>
          <Link to={page.path}>{page.name}</Link>
        </Button>
      );
    });
  };

  return (
    <>
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="brand" href="/">
          VorseekCompany
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">{renderMenu()}</Nav>
          <Form inline>
            {/*===========================*/}

            {props.isLoggedIn ? (
              <>
                <Button
                  variant="outline-secondary"
                  className="mr-2"
                  onClick={props.onLogout}
                >
                  Out
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline-secondary"
                  className="mr-2"
                  onClick={props.handleShowRegistration}
                >
                  Sign up
                </Button>
                <Button
                  variant="outline-info"
                  className="ml-2"
                  onClick={props.handleShowLogin}
                >
                  Sign in
                </Button>
              </>
            )}
            {/* ================================= */}
            {/* Место для вставки модальных окон */}
            <ModalLogin
              onLoginSuccesses={props.onLoginSuccesses}
              {...props}
            />

            {/*===========================*/}
            <ModalRegistration
              {...props}
            />
            {/*===========================*/}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
