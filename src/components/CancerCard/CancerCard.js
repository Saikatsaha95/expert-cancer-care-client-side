import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import "./CancerCard.css";

const CancerCard = ({ cancerData }) => {
  const { name, img, description } = cancerData;
  return (
    <Col>
      <Card className="single-card">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>

        <Button variant="primary">
          Learn More <i class="fas fa-chevron-right"></i>
        </Button>
      </Card>
    </Col>
  );
};

export default CancerCard;
