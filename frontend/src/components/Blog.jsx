import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Axios from "axios";
import {Button, CardDeck} from "react-bootstrap";
import PostItem from "./PostItem";
import PostsList from "./PostsList";
import Post from "./Post";
import axios from "axios";
import Cards from "./Cards";


export default class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
    // this.login = this.login.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);

  }

  async cardConstructot() {
    try {
      const response = await axios(
        `https://jsonplaceholder.typicode.com/posts`
      );
      this.setState({
        posts: response.data,
      });
    } catch (e) {
      console.log(e);
    }
  }

  async componentDidMount() {
    this.cardConstructot();
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

  render() {
    return (
      <>
        <div className="container">
          {/*<Button variant="outline-info">*/}
          {/*  Sign up*/}
          {/*</Button>*/}

          <Router>
            <div>
              <Switch>
                <Route exact path="/blog" component={() => (
                  <PostsList key={this.state.posts.id} posts={this.state.posts}/>
                )}/>
                <Route exact path="/blog/post/:id" render={(props) => {
                  const id = +props.match.params.id
                  const selectedPost = this.state.posts.find(post => post.id === id);
                  console.log(selectedPost)
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
