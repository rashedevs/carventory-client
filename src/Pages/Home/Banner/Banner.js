import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel fade>
  <Carousel.Item>
    <img style={{ height: "550px" }}
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2015/10/01/17/17/car-967387__480.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{ height: "550px" }}
      className="d-block w-100"
      src="https://freepngimg.com/download/bmw/60179-series-x3-sedan-bmw-car-free-photo-png.png"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{ height: "550px" }}
      className="d-block w-100"
      src="https://pngimg.com/uploads/mercedes/mercedes_PNG80135.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;