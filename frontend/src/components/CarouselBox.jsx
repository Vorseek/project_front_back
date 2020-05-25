import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import forestImg from '../assets/forest.jpeg'
import forestRoadImg from '../assets/forest-road.jpeg'
import riverImg from '../assets/river.jpeg'

export default function CarouselBox() {
    return (
      <Carousel >
        <Carousel.Item>
          <img
            className={'d-block w-100'}
            src={ forestImg }
            alt="Forest"
          />
          <Carousel.Caption>
            <h3>Forest</h3>
            <p>Фотограф: <a href="https://www.instagram.com/rudi_volt/">Rudolf Jakkel</a></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={'d-block w-100'}
            src={ forestRoadImg }
            alt="Forest road"
          />
          <Carousel.Caption>
            <h3>Forest Road</h3>
            <p>Фотограф: <a href="https://skitterphoto.com/?ref=pexels">Skitterphoto</a></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={'d-block w-100'}
            src={ riverImg }
            alt="Forest"
          />
          <Carousel.Caption>
            <h3>River</h3>
            <p>Фотограф: <a href="https://www.instagram.com/mdamboldt/">Martin Damboldt</a></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
