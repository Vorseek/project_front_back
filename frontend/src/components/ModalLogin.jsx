import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

export default function ModalLogin(props) {
  return (
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
        <Button variant="outline-info" onClick={props.onLoginSuccesses}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
