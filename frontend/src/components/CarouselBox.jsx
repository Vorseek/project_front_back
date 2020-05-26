import React from "react";
import Carousel from 'react-bootstrap/Carousel'


export default function CarouselBox() {
  return (

    <Carousel>
      <Carousel.Item>
        <img
          className={'d-block w-100'}
          src={'https://images.pexels.com/photos/4827/nature-forest-trees-fog.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
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
          src={'https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
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
          src={'https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
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
