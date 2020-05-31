import React from 'react';
import Header from "./Header";
import CarouselBox from "./CarouselBox";
import Cards from "./Cards";
import {CardDeck} from "react-bootstrap";
import Footer from "./footer";
import Content from "./Content";


export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }


  render() {
    return (

      <React.Fragment>
        <Header/>
        <Content/>
        <p>world hi</p>
        <Footer/>
      </React.Fragment>

    )
  }
}