import React from "react";
import {Button, Card, Form} from 'react-bootstrap';
import {Link} from "react-router-dom";
import axios from "axios";

const PostItem = ({postTitle, postText, _id, onRemove, cardConstructot}) => {
  const postDel = async (_id) => {
    try {
      const response = await axios.get(`http://localhost:3010/post/del?id=${_id}`)
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <>
      <Card className="mb-3">
        <Card.Body>

          <Card.Title>{postTitle}</Card.Title>

          <Card.Text>
            Post on: {postText}
          </Card.Text>
        </Card.Body>

        <div className="container">
          <Link to={`/blog/post/${_id}`}>
            <Button variant="primary" className="mr-2">More</Button>
          </Link>
          <Link to={`/blog`} onClick={() => {
            postDel(_id);
            cardConstructot();
          }}><Button variant="primary" className="mr-2">Remove</Button>
          </Link>
          <Link to={`/blog/post/${_id}/edit`}><Button variant="primary">Edit</Button></Link>
        </div>
      </Card>


    </>
  )
}
export default PostItem;