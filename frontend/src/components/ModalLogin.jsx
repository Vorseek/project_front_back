import React from "react";
import {Modal, Form, Button} from "react-bootstrap";
import axios from "axios";

export default class ModalLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    // this.login = this.login.bind(this);
  }

  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }

  handleChangePassword(event) {
    this.setState({password: event.target.value});
  }

  async login() {
    try {
      const response = await axios.post('http://localhost:3010/user/login', {
        email: this.state.email,
        password: this.state.password
      });
      localStorage.setItem("user", response.data);
      this.props.onLoginSuccesses();
    } catch (e) {
      console.log(e);
    }
  }

  render() {

    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
          <Button variant="outline-info" onClick={async () => {
            await this.login();
            console.log(this.props.isLoggedIn)
            if (this.props.isLoggedIn) {
              this.props.onLoginSuccesses();
            }
          }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
