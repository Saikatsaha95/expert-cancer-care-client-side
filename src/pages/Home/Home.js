import React from "react";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
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
      <Footer></Footer>
    </div>
  );
};

export default Home;
