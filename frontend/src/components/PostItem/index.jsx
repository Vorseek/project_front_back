import React from "react";
import {Button, Card, Form} from 'react-bootstrap';
import {Link} from "react-router-dom";

const PostItem = ({title, body, id, onRemove}) => {
  return (
    <>
      <Card  className="mb-3">
        <Card.Body>

          <Card.Title>{title}</Card.Title>

          <Card.Text>
            Post on {body}
          </Card.Text>
        </Card.Body>

        <div className="container">
          <Link to={`/blog/post/${id}`}>
          <Button variant="primary" className="mr-2">More</Button>
        </Link>
          <a href="/" onClick={onRemove}><Button variant="primary" className="mr-2">Remove</Button></a>
          <Link to={`/blog/post/${id}/edit`}><Button variant="primary">Edit</Button></Link>
        </div>
      </Card>


    </>
  )
}
export default PostItem;