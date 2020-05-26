import React from "react";
import CarouselBox from "./CarouselBox";
import Cards from "./Cards";
import {CardDeck} from "react-bootstrap";


export default class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }


  render() {
    return (
      <>
        <div className={'container'}>
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
        </div>
      </>
    )
  }
}