import React from 'react';
import {
  Navbar,
  Nav,
  FormControl,
  Container,
  Form,
  Button,
  Modal
} from "react-bootstrap";
import CarouselBox from "./CarouselBox";

// глупый компанент
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleShow() {
    this.setState({
      show: true
    })
  }

  handleClose() {
    this.setState({
      show: false
    })
  }


  render() {
    return (
      <Navbar fixed='top' collapseOnSelect expand='md' bg={'dark'} variant={'dark'} >
        <Container>
          <Navbar.Brand className="brand" href="/">
            {/*<img
              src={logo}
              height={'30'}
              width={'30'}
              className={'d-inline-block align-top'}
              alt={'Logo'}
            />*/} VorseekCompany
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={'responsive-navbar-nav'}/>
          <Navbar.Collapse id={'responsive-navbar-nav'}>
            <Nav className="mr-auto">
              <Nav.Link href={'/'}>Home</Nav.Link>
              <Nav.Link href={'/'}>About us</Nav.Link>
              <Nav.Link href={'/'}>Contacts</Nav.Link>
              <Nav.Link href={'/'}>Blog</Nav.Link>
            </Nav>
            <Form inline>
              {/*===========================*/}
              <>
                <Button variant="outline-info" onClick={this.handleShow}>
                  Sign in
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Sign in</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
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
                    <Button variant="secondary" onClick={this.handleClose}>
                      Close
                    </Button>
                    <Button variant="outline-info" onClick={this.handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
              {/*==============================*/}
              {/*<Button*/}
              {/*  className='button-registration'*/}
              {/*  variant='outline-info'*/}
              {/*  onClick={() => alert()}*/}
              {/*>Регистрация</Button>*/}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}