import React from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";

export default function ModalLogin(props) {
  return (
    <Modal show={props.showRegistration} onHide={props.handleCloseRegistration}>
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
        <Button variant="secondary" onClick={props.handleCloseRegistration}>
          Close
        </Button>
        <Button variant="outline-info" onClick={props.handleCloseRegistration}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
