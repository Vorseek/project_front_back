import React from "react";
import { Card, Button } from "react-bootstrap";

export default function Cards(props) {
  return (
    <Card border="dark" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Status: {props.status} <br />
          Species: {props.species}
        </Card.Text>
        <Card.Text>
          Location: {props.location.name}
          <br />
          Origin location: {props.origin.name}
        </Card.Text>
        {/* <Button variant="outline-info">Go somewhere</Button> */}
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Date create: {props.created.split('T')[0]}</small>
      </Card.Footer>
    </Card>
  );
}
