import React from "react";
import ExpertCard from "../../components/ExpertCard/ExpertCard";
import useExpertData from "../../hooks/useExpertData";

const OurExperts = () => {
  const [experts] = useExpertData();
  return (
    <div className="container mt-5">
      <div className="row g-3 ">
        {experts?.map((expert) => (
          <ExpertCard key={expert.id} expert={expert}></ExpertCard>
        ))}
      </div>
    </div>
  );
};

export default OurExperts;
