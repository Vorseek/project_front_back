import React from "react";
import {Button, Card, Form} from 'react-bootstrap';
import { Link } from "react-router-dom";

const Post = ({title, body, id, onRemove}) => {
  return (
    <>
      <Card>
        <Card.Body>
          <Link to={`/blog/post/${id}`}>
            <Card.Title>{title}</Card.Title>
          </Link>
          <Card.Text>
            Post on {body}
          </Card.Text>
        </Card.Body>
        <div className="container">
          <Link to="/">
            <Button variant="primary" className="mr-2">Main</Button>
          </Link>
          <a href="/" onClick={onRemove}><Button variant="primary" className="mr-2">Remove</Button></a>
          <Link to={`/blog/post/${id}/edit`}><Button variant="primary">Edit</Button></Link>
        </div>
      </Card>


    </>
  )
}
export default Post;