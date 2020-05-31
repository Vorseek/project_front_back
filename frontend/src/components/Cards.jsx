import React from "react";
import {Card, Button} from "react-bootstrap";

export default function Cards(props) {



  return (
    <Card border='dark' style={{width: '18rem'}}>
      <Card.Img variant="top"
                src={props.characterImage}/>
      <Card.Body>
        <Card.Title>{props.characterName}</Card.Title>
        <Card.Text>
          Status: {props.status}
        </Card.Text>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sed et 
        </Card.Text>
        <Button variant="outline-info">Go somewhere</Button>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  )
}
