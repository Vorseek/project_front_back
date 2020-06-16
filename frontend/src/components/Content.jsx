import React from "react";
import CarouselBox from "./CarouselBox";
import Cards from "./Cards";
import {CardDeck} from "react-bootstrap";
import axios from "axios";
import dataReducer from '../actions/data';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Content extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   characterOneThree: [],
    //   characterFourSix: [],
    //   posts: [],
    // };
    // this.cardConstructor = this.cardConstructor.bind(this);
    // this.cardsDeck = this.cardsDeck.bind(this);
    // this.componentDidMount = this.componentDidMount.bind(this);
    // this.postConstructor = this.postConstructor.bind(this);
  }

  // Рандомный массив для запроса персонажей
  randomCharter() {
    const arrCharter = [];
    for (let i = 6; arrCharter.length < i;) {
      arrCharter.push(Math.floor(Math.random() * Math.floor(350)));
    }
    return arrCharter
  }

  // запрос персонажей
  async cardConstructor() {
    try {
      const response = await axios(
        `https://rickandmortyapi.com/api/character/${this.randomCharter()}`
      );
      // const { name, image } = response.data;

      this.props.actions.characterOneThree(response.data.slice(0, 3), response.data.slice(3))

    } catch (e) {
      console.log(e);
    }
  }

  async componentDidMount() {
    this.cardConstructor();
    this.postConstructor()
  }

  async postConstructor() {
    try {
      const response = await axios(
        `http://localhost:3010/post`
      );
      // const { name, image } = response.data;
      this.setState({
        posts: response.data,
      });
    } catch (e) {
      console.log(e);
    }
  }


  // создаем карточки 
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
    console.log(this.props)
    return (
      <>
        <div className={"container"}>
          <CarouselBox/>
          {this.cardsDeck(this.props.data.characterOneThree)}
          {this.cardsDeck(this.props.data.characterFourSix)}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    dataReducer,
    dispatch
  ),
});

const Wrapped = connect(mapStateToProps, mapDispatchToProps)(Content);

export default Wrapped