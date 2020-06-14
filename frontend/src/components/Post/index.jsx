import React, {useState} from "react";
import {Button, Card, Form, Media} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    }
    this.downloadComments = this.downloadComments.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async downloadComments() {
    const response = await axios.get("http://localhost:3010/comment")
    this.setState({
      comments: response.data,
    })
  }


  async componentDidMount() {
    this.downloadComments();
  }


  render() {
    return (
      <>
        <Card>

          <Card.Body>
            <Link to={`/blog/post/${this.props._id}`}>
              <Card.Title>{this.props.postTitle}</Card.Title>
            </Link>
            <Card.Text>
              Post on: {this.props.postText}
            </Card.Text>
          </Card.Body>
          <div className="container">
            <Link to="/blog">
              <Button variant="primary" className="mr-2">Back</Button>
            </Link>
            <a href="/"><Button variant="primary" className="mr-2">Remove</Button></a>
            <Link to={`/blog/post/${this.props._id}/edit`}><Button variant="primary">Edit</Button></Link>
          </div>
        </Card>
        {
          console.log(this.state.comments)
          // comments.map(e => (
          //   <Card>
          //     <h3>Comments</h3>
          //     <Card.Body>
          //       <Card.Title>{e.commentText}</Card.Title>
          //       <Card.Text>
          //         Post on: {postText}
          //       </Card.Text>
          //     </Card.Body>
          //     <Card.Body>
          //       <Card.Title>{postTitle}</Card.Title>
          //       <Card.Text>
          //         Post on: {postText}
          //       </Card.Text>
          //     </Card.Body>
          //   </Card>
          // ))
        }

      </>
    )
  }
}
