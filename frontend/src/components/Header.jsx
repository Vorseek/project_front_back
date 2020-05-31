import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  Button,
  Modal,
  Row,
  Col,
} from "react-bootstrap";

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
              <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Sign in</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />{" "}
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />{" "}
                  </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={props.handleClose}>
                    Close
                  </Button>
                  <Button
                    variant="outline-info"
                    onClick={props.onLoginSuccesses}
                  >
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
            {/*===========================*/}
            <Modal
              show={props.showRegistration}
              onHide={props.handleCloseRegistration}
            >
              <Modal.Header closeButton>
                <Modal.Title>Sign up</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Row>
                    <Col>
                      <Form.Label>First name</Form.Label>
                      <Form.Control placeholder="First name" />
                    </Col>
                    <Col>
                      <Form.Label>Last name</Form.Label>
                      <Form.Control placeholder="Last name" />
                    </Col>
                  </Row>
                </Form>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  onClick={props.handleCloseRegistration}
                >
                  Close
                </Button>
                <Button
                  variant="outline-info"
                  onClick={props.handleCloseRegistration}
                >
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
            {/*===========================*/}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
