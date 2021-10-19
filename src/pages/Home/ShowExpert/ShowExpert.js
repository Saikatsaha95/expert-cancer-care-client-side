import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ExpertCard from "../../../components/ExpertCard/ExpertCard";
import useExpertData from "../../../hooks/useExpertData";

const ShowExpert = () => {
  const [experts] = useExpertData();
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-3">Meet Our Experts</h2>
      <div className="row g-3 ">
        {experts?.slice(0, 3).map((expert) => (
          <ExpertCard key={expert.id} expert={expert}></ExpertCard>
        ))}

        <NavLink to="/experts" className="mx-auto text-center">
          <Button className=" my-3 w-25" variant="warning">
            See More <i class="fas fa-arrow-circle-right"></i>
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default ShowExpert;
