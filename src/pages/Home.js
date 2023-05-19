import React from "react";
import HeroSection from "../components/Home/HeroSection/HeroSection";
import ApyStaking from "../components/Home/ApyStaking/ApyStaking";
import FindProject from "../components/Home/FindProject/FindProject";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FindProject />
      <ApyStaking />
    </>
  );
};

export default Home;
