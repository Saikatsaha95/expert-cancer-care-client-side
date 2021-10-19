import React from "react";
import { Row } from "react-bootstrap";
import CancerCard from "../../components/CancerCard/CancerCard";
import useCacnerData from "../../hooks/useCancerData";

const CancerWeTreat = () => {
  const [cancerData] = useCacnerData();
  console.log(cancerData);
  return (
    <div className="container my-3">
      <Row md={3} sm={1} className="g-4">
        {cancerData.map((cancerData) => (
          <CancerCard key={cancerData.id} cancerData={cancerData}></CancerCard>
        ))}
      </Row>
    </div>
  );
};

export default CancerWeTreat;
