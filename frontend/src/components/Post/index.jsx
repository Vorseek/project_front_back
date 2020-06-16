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
    await this.downloadComments();
    this.sort()
  }

  sort() {
    const arr = this.state.comments.filter(e => e.postId === this.props._id)
    this.setState({
      comments: arr
    })
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
        <Card>
          <h3>Comments</h3>
          {
            this.state.comments.map(e => (
              <Card.Body key={e._id}>
                <Card.Text>
                  {e.commentText}
                </Card.Text>
                <Button variant="primary" className="mr-2">Remove</Button>
                <Button variant="primary" className="mr-2">Edit</Button>
              </Card.Body>
            ))
          }
        </Card>
      </>
    )
  }
}
