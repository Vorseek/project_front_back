import React from "react";
import CarouselBox from "./CarouselBox";
import Cards from "./Cards";
import { CardDeck } from "react-bootstrap";
import axios from "axios";

export default class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characterOneThree: [],
      characterFourSix: [],
      posts: [],
    };
    this.cardConstructot = this.cardConstructot.bind(this);
    this.cardsDeck = this.cardsDeck.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.postConstructor = this.postConstructor.bind(this);
  }

  // запрос инфы
  async cardConstructot() {
    try {
      const response = await axios(
        `https://rickandmortyapi.com/api/character/1,2,3,4,5,6`
      );
      // const { name, image } = response.data;
      this.setState({
        characterOneThree: response.data.slice(0, 3),
        characterFourSix: response.data.slice(3),
      });
    } catch (e) {
      console.log(e);
    }
  }

  async componentDidMount() {
    this.cardConstructot();
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
    return (
      <>
        <div className={"container"}>
          <CarouselBox />
          {this.cardsDeck(this.state.characterOneThree)}
          {this.cardsDeck(this.state.characterFourSix)}
        </div>
      </>
    );
  }
}
