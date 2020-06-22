import React, {useState} from "react";
import {Button, Card, Form, Media} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      comment: '',
      commentEdit: '',
    }
    this.downloadComments = this.downloadComments.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.commentAdd = this.commentAdd.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);

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

  async commentDel(_id) {
    try {
      const response = await axios.get(`http://localhost:3010/comment/del?id=${_id}`)
    } catch (e) {
      console.log(e);
    }
  }

  async commentAdd() {
    try {
      const response = await axios.post(`http://localhost:3010/comment/add`, {
        commentText: this.state.comment,
        postId: this.props._id,
        userId: '3e4a6376-80cd-4c72-b26f-ecf1340811aa',
      })
    } catch (e) {
      console.log(e);
    }
  }

  handleChangeText(event) {
    this.setState({comment: event.target.value});
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
            {/*<a href="/"><Button variant="primary" className="mr-2">Remove</Button></a>*/}
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
                <Button variant="primary" className="mr-2" onClick={async () => {
                  await this.commentDel(e._id);
                  await this.componentDidMount();
                }}>Remove</Button>
                <Button variant="primary" className="mr-2">Edit</Button>
              </Card.Body>
            ))
          }
        </Card>
        <Form.Group controlId="formBasicComment">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            type="text"
            placeholder="Comment"
            onChange={this.handleChangeText}
            value={this.state.comment}/>
          <Button variant="primary" className="mr-2" onClick={async () => {
            await this.commentAdd();
            await this.componentDidMount();
            this.setState({
              comment: ''
            })
          }}> Send </Button>
        </Form.Group>
      </>
    )
  }
}
