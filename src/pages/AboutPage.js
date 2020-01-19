import React from "react";
import AboutComponent from "../components/AboutComponent";
import Hero from "../components/Hero";
import aboutBcg from "../images/aboutBcg.jpeg";

const AboutPage = () => {
  return (
    <div>
      <Hero img={aboutBcg}></Hero>
      <AboutComponent></AboutComponent>
    </div>
  );
};

export default AboutPage;
