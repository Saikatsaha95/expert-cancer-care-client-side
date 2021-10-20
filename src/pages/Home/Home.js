import React from "react";
import Banner from "../../components/Banner/Banner";

import TreatmentOptions from "../TreatmentOptions/TreatmentOptions";
import HomeCancerCard from "./HomeCancerCard/HomeCancerCard";
import ShowExpert from "./ShowExpert/ShowExpert";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeCancerCard></HomeCancerCard>
      <TreatmentOptions></TreatmentOptions>
      <ShowExpert />
    </div>
  );
};

export default Home;
