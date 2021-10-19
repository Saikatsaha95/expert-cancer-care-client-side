import React from "react";
import { Row, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CancerCard from "../../../components/CancerCard/CancerCard";
import useCacnerData from "../../../hooks/useCancerData";

const HomeCancerCard = () => {
  const [cancerData, setCancerData] = useCacnerData();
  return (
    <div className="container my-5">
      <h3 className="text-center">Cancer We Treat</h3>
      <Row md={3} className="g-4">
        {cancerData.slice(0, 6).map((cancerData) => (
          <CancerCard key={cancerData.id} cancerData={cancerData}></CancerCard>
        ))}

        <NavLink to="/allservices" className="mx-auto">
          <Button className=" mt-5 w-75" variant="warning">
            See More <i class="fas fa-arrow-circle-right"></i>
          </Button>
        </NavLink>
      </Row>
    </div>
  );
};

export default HomeCancerCard;
