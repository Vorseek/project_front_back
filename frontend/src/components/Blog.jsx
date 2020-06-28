import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Button, CardDeck, InputGroup, FormControl, Card, Form} from "react-bootstrap";
import PostsList from "./PostsList";
import Post from "./Post";
import axios from "axios";
import Cards from "./Cards";


export default class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      newPost: {},
      hideCreatePost: false,
      postTitle: '',
      postText: '',
    };
    this.cardConstructor = this.cardConstructor.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.hideCreatePosts = this.hideCreatePosts.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.addPost = this.addPost.bind(this);

  }


  async cardConstructor() {
    try {
      const response = await axios(
        `http://localhost:3010/post`
      );
      this.setState({
        posts: response.data,
      });
    } catch (e) {
      console.log(e);
    }
  }


  async addPost() {
    const response = await axios.post('http://localhost:3010/post/create', {
      postTitle: this.state.postTitle,
      postText: this.state.postText,
      userId: "3e4a6376-80cd-4c72-b26f-ecf1340811aa",
    }, {headers: {Authorization: localStorage.user}})
    if (response) {
      this.setState({
        hideCreatePost: false,
      })
      this.cardConstructor()
    }
  }

  handleChangeTitle(event) {
    this.setState({postTitle: event.target.value});
  }

  handleChangeText(event) {
    this.setState({postText: event.target.value});
  }

  async componentDidMount() {
    await this.cardConstructor();
  }

  cardsDeck(character) {
    return (
      <CardDeck className="m-4">
        {character.map((character) => {
          return <Cards key={character.id} {...character} />;
        })}
      </CardDeck>
    );
  }

  hideCreatePosts() {
    if (!this.state.hideCreatePost) {
      this.setState({
        hideCreatePost: true,
      })
    } else {
      this.setState({
        hideCreatePost: false,
      })
    }
  }

  render() {
    return (
      <>
        <div className="container">
          <Button variant="outline-secondary" onClick={() => {
            this.hideCreatePosts()
          }}>Create post?</Button>

          {this.state.hideCreatePost &&
          <Card>
            <Card.Header>Create post</Card.Header>
            <Card.Body>
              <InputGroup size="sm" className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroup-sizing-sm">Title</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                             type="text"
                             placeholder="Enter title"
                             onChange={this.handleChangeTitle}
                             value={this.state.postTitle}/>
              </InputGroup>
            </Card.Body>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Post</Form.Label>
              <Form.Control as="textarea" rows="3"
                            type="text"
                            placeholder="Enter text"
                            onChange={this.handleChangeText}
                            value={this.state.postText}/>
            </Form.Group>
            <Button variant="outline-secondary" onClick={() => {
              this.addPost()
            }}>Add post</Button>
          </Card>
          }


          {/*<Button variant="outline-info">*/}
          {/*  Sign up*/}
          {/*</Button>*/}

          <Router>
            <div>
              <Switch>
                <Route exact path="/blog" component={() => (
                  <PostsList key={this.state.posts._id} posts={this.state.posts}
                             cardConstructor={this.cardConstructor}/>
                )}/>
                <Route exact path="/blog/post/:_id" render={(props) => {
                  const id = props.match.params._id
                  const selectedPost = this.state.posts.find(post => post._id === id);
                  return <Post {...selectedPost} />
                }}/>
              </Switch>
            </div>
          </Router>

        </div>
      </>
    );
  }
}
