import React from "react";
import {Button, Card, Form} from 'react-bootstrap';
import { Link } from "react-router-dom";

const Post = ({postTitle, postText, _id, onRemove}) => {
  return (
    <>
      <Card>
        <Card.Body>
          <Link to={`/blog/post/${_id}`}>
            <Card.Title>{postTitle}</Card.Title>
          </Link>
          <Card.Text>
            Post on: {postText}
          </Card.Text>
        </Card.Body>
        <div className="container">
          <Link to="/blog">
            <Button variant="primary" className="mr-2">Back</Button>
          </Link>
          <a href="/" onClick={onRemove}><Button variant="primary" className="mr-2">Remove</Button></a>
          <Link to={`/blog/post/${_id}/edit`}><Button variant="primary">Edit</Button></Link>
        </div>
      </Card>


    </>
  )
}
export default Post;