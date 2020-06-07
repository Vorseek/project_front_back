import React from "react";
import {Button, Card, Form} from 'react-bootstrap';

const addForm = () => {

  return (
    <Form>
      <Form.Group controlId="formGroupTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" />
      </Form.Group>
      <Form.Group controlId="formGroupImage">
        <Form.Label>Image URL</Form.Label>
        <Form.Control type="text" placeholder="Enter Image URL" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows="8" placeholder="Enter text"/>
      </Form.Group>
      <Button variant="outline-info">
        Submit
      </Button>
    </Form>
  )
}
export default addForm;