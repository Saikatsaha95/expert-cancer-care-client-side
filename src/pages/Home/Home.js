import React from "react";
import Banner from "../../components/Banner/Banner";
import Header from "../../components/Header/Header";
import HomeCancerCard from "./HomeCancerCard/HomeCancerCard";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeCancerCard></HomeCancerCard>
    </div>
  );
};

export default Home;
