import React, { createContext } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useParams } from "react-router";

import useDetailsData from "../../hooks/useDetailsData";

export const detailsProvider = createContext();

const CancerDetails = () => {
  const { cancerId } = useParams();
  const [detailsData] = useDetailsData();
  const searchData = detailsData?.find(
    (data) => parseInt(data.id) === parseInt(cancerId)
  );

  return (
    <div>
      {/* top details part */}
      <div className="top-details">
        <Container>
          <Row className="align-items-center g-5">
            <Col md={5} className="me-5 left-column">
              <h3>{searchData?.title}</h3>
              <p className="mt-4">{searchData?.topdescription}</p>
              <Button variant="danger">Treatment Options</Button>
            </Col>
            <Col md={6} className="ms-auto pt-5">
              <img className="img-fluid" src={searchData?.topimg} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default CancerDetails;
