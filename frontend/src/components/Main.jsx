import React from 'react';
import Header from "./Header";
import CarouselBox from "./CarouselBox";
import Cards from "./Cards";
import {CardDeck} from "react-bootstrap";


export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }


  render() {
    return (
      <>
        <Header/>
        <CarouselBox/>
        <CardDeck className='m-4'>
          <Cards/>
          <Cards/>
          <Cards/>
        </CardDeck>
        <CardDeck className='m-4'>
          <Cards/>
          <Cards/>
          <Cards/>
        </CardDeck>
      </>

    )
  }
}