import React from "react";
import { Carousel, Row } from "react-bootstrap";
import banner from "../../images/banner.jpg";
import banner2 from "../../images/banner2.jpg";
import banner3 from "../../images/banner3.jpg";

import "./Banner.css";

const Banner = () => {
  return (
    <div className="container">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={banner} alt="First slide" />
          <Carousel.Caption className="banner-text">
            <h2>Expert cancer care</h2>
            <p>The Care You Need Is Just Once Call Away</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
