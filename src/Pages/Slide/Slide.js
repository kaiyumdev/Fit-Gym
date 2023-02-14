import React from "react";
import Carousel from "react-bootstrap/Carousel";
const Slide = () => {
  return (
    <div id="banner">
      <Carousel>
        <Carousel.Item>
          <img
            width={700}
            height={900}
            className="d-block w-100"
            src="https://images.pexels.com/photos/4164849/pexels-photo-4164849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="First slide"
          />
          <Carousel.Caption>
            <img src="" alt="" />
            <h3>400kg Dumbbell</h3>
            <p>400kg Dumbbell is very important equipment fo gymnastic</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            width={700}
            height={900}
            className="d-block w-100"
            src="https://images.pexels.com/photos/4325442/pexels-photo-4325442.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>100kg Dumbbell</h3>
            <p>Dumbbell is very important equipment fo gymnastic</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            width={700}
            height={900}
            className="d-block w-100"
            src="https://images.pexels.com/photos/4164844/pexels-photo-4164844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Bells of steel</h3>
            <p>Bell of steel is very important equipment fo gymnastic</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slide;
