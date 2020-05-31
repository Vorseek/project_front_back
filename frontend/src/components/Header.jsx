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

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showRegistration: false,
      isLoggedIn: false,
      userLogin: "",
    };
  }

  handleShowLogin() {
    this.setState({
      show: true,
    });
  }

  handleShowRegistration() {
    this.setState({
      showRegistration: true,
    });
  }

  handleClose() {
    this.setState({
      show: false,
    });
  }

  handleCloseRegistration() {
    this.setState({
      showRegistration: false,
    });
  }

  onInputChange(e) {
    this.setState({
      userLogin: e.target.value,
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
    
    const pages = [
      { pageId: 0, name: "Home" },
      { pageId: 1, name: "About us" },
      { pageId: 2, name: "Users" },
      { pageId: 3, name: "Blog" },
    ];

    const renderMenu = () => {
      return pages.map((page, i) => {
        return (
          <Nav.Link key={i} onClick={() => this.props.setPage(page.pageId)}>
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
                {this.state.isLoggedIn ? (
                  <>
                    <Button
                      variant="outline-secondary"
                      className="mr-2"
                      onClick={() => this.onLogout()}
                    >
                      Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="outline-secondary"
                      className="mr-2"
                      onClick={() => this.handleShowRegistration()}
                    >
                      Sign up
                    </Button>
                    <Button
                      variant="outline-info"
                      className="ml-2"
                      onClick={() => this.handleShowLogin()}
                    >
                      Sign in
                    </Button>
                  </>
                )}
                <Modal show={this.state.show} onHide={() => this.handleClose()}>
                  <Modal.Header closeButton>
                    <Modal.Title>Sign in</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      onChange={(event) => this.onInputChange(event)}
                    />{" "}
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                      />{" "}
                    </Form.Group>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="secondary"
                      onClick={() => this.handleClose()}
                    >
                      Close
                    </Button>
                    <Button
                      variant="outline-info"
                      onClick={() => this.onLoginSuccesses()}
                    >
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
              {/*===========================*/}
              <Modal
                show={this.state.showRegistration}
                onHide={() => this.handleCloseRegistration()}
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
                    onClick={() => this.handleCloseRegistration()}
                  >
                    Close
                  </Button>
                  <Button
                    variant="outline-info"
                    onClick={() => this.handleCloseRegistration()}
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
}
