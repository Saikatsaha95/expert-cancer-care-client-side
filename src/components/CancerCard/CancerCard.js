import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./CancerCard.css";

const CancerCard = ({ cancerData }) => {
  const { name, img, description, id } = cancerData;
  return (
    <Col>
      <Card className="single-card">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>

        <NavLink className="pb-3 ps-3" to={`/allservices/${id}`}>
          <Button variant="primary">
            Learn More <i class="fas fa-chevron-right"></i>
          </Button>
        </NavLink>
      </Card>
    </Col>
  );
};

export default CancerCard;
