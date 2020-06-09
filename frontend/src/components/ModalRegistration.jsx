import React from "react";
import {Modal, Form, Button, Row, Col} from "react-bootstrap";
import axios from "axios";

export default class ModalLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      surname: '',
      birthDate: '14.02.1998',
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeSurname = this.handleChangeSurname.bind(this);

  }
  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }

  handleChangePassword(event) {
    this.setState({password: event.target.value});
  }
  handleChangeName(event) {
    this.setState({name: event.target.value});
  }
  handleChangeSurname(event) {
    this.setState({surname: event.target.value});
  }


  async registration() {
    try {
      await axios.post('http://localhost:3010/user/register', {
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
        surname: this.state.surname,
        birthDate: this.state.birthDate,
      });
      this.props.onLoginSuccesses();
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <Modal show={this.props.showRegistration} onHide={this.props.handleCloseRegistration}>
        <Modal.Header closeButton>
          <Modal.Title>Sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col>
                <Form.Label>First name</Form.Label>
                <Form.Control
                  placeholder="First name"
                  onChange={this.handleChangeName}
                  value={this.state.name}
                />
              </Col>
              <Col>
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  placeholder="Last name"
                  onChange={this.handleChangeSurname}
                  value={this.state.surname}
                />
              </Col>
            </Row>
          </Form>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={this.handleChangeEmail}
            value={this.state.email}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={this.handleChangePassword}
              value={this.state.password}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleCloseRegistration}>
            Close
          </Button>
          <Button variant="outline-info" onClick={async () => {
            await this.registration();
            this.props.handleCloseRegistration();
          }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
