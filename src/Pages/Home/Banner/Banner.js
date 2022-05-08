import React from "react";
import { Carousel } from "react-bootstrap";
import banner from "../../../images/banner.jpg";
import banner1 from "../../../images/banner1.jpeg";
import banner2 from "../../../images/banner2.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            style={{ height: "500px" }}
            className="d-block w-100"
            src={banner}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Car Inventory</h3>
            <p>We do manage cars</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "500px" }}
            className="d-block w-100"
            src={banner1}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Safe destination</h3>
            <p>We do care for every cars</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "500px" }}
            className="d-block w-100"
            src={banner2}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Best business deals</h3>
            <p>Grab your best deals with us</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
