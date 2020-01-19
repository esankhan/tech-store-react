import React from "react";
import Hero from "../components/Hero";
import contactBcg from "../images/contactBcg.jpeg";
import Contact from "../components/ContactComponent";

const ContactPage = () => {
  return (
    <div>
      <Hero img={contactBcg}></Hero>
      <Contact />
    </div>
  );
};

export default ContactPage;
