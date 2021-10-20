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
          <Carousel.Caption className="bg-dark">
            <h2>Expert Cancer Care</h2>
            <p>The Care You Need Is Just Once Call Away</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />

          <Carousel.Caption className="bg-dark">
            <h3>Meet Our Experts</h3>
            <p>Get Treatment From The Best Experts</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />

          <Carousel.Caption className="bg-dark">
            <h3>Best Treatment Facilities</h3>
            <p>We Will Provide The Best Treatments</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
