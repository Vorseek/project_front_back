import React from "react";
import CarouselBox from "./CarouselBox";
import Cards from "./Cards";
import { CardDeck } from "react-bootstrap";
import axios from "axios";

export default class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      character: [],
      cardNumber: 3,
    };
    this.cardConstructot = this.cardConstructot.bind(this);
    this.cardsDeck = this.cardsDeck.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async cardConstructot() {
    try {
      const response = await axios(
        `https://rickandmortyapi.com/api/character/`
      );
      // const { name, image } = response.data;
      this.setState({
        character: response.data.results,
      });
    } catch (e) {
      console.log(e);
    }
  }

  async componentDidMount() {
    this.cardConstructot();
  }



// попробовать изменить state из этой функции
  // cardsDeck() {

  //   return (
      
  //     <CardDeck className="m-4">
  //       {this.state.character.map((character) => {
  //         if (character.id <= this.state.cardNumber) {
  //           return (
  //             <Cards
  //               key={character.id}
  //               characterImage={character.image}
  //               characterName={character.name}
  //               status={character.status}
  //             />
  //           );
  //         }
  //       })}
  //     </CardDeck>
  //   );
  // }

  render() {
    
    return (
      <>
        <div className={"container"}>
          <CarouselBox />
          <CardDeck className="m-4">
            {this.state.character.map((character) => {
              if (character.id <= 3) {
                return (
                  <Cards
                    key={character.id}
                    characterImage={character.image}
                    characterName={character.name}
                    status={character.status}
                  />
                );
              }
            })}
          </CardDeck>
          <CardDeck className="m-4">
            {this.state.character.map((character) => {
              if (character.id > 3 && character.id <= 6) {
                return (
                  <Cards
                    key={character.id}
                    characterImage={character.image}
                    characterName={character.name}
                    status={character.status}
                  />
                );
              }
            })}
          </CardDeck>
        </div>
      </>
    );
  }
}
