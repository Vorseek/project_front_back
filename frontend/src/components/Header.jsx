import React from "react";
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import ModalLogin from "./ModalLogin";
import ModalRegistration from "./ModalRegistration";

export default function Header(props) {
  const pages = [
    { pageId: 0, name: "Home" },
    { pageId: 1, name: "About us" },
    { pageId: 2, name: "Users" },
    { pageId: 3, name: "Blog" },
  ];

  const renderMenu = () => {
    return pages.map((page, i) => {
      return (
        <Nav.Link key={i} onClick={() => props.setPage(page.pageId)}>
          {page.name}
        </Nav.Link>
      );
    });
  };

  return (
    <Navbar collapseOnSelect expand="md" bg={"dark"} variant={"dark"}>
      <Container>
        <Navbar.Brand className="brand" href="/">
          VorseekCompany
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={"responsive-navbar-nav"} />
        <Navbar.Collapse id={"responsive-navbar-nav"}>
          <Nav className="mr-auto">{renderMenu()}</Nav>
          <Form inline>
            {/*===========================*/}
            <>
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
                show={props.show}
                handleClose={props.handleClose}
                onLoginSuccesses={props.onLoginSuccesses}
              />
            </>
            {/*===========================*/}
            <ModalRegistration
              showRegistration={props.showRegistration}
              handleCloseRegistration={props.handleCloseRegistration}
            />
            {/*===========================*/}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
