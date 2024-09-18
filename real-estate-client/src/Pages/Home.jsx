import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutUs from "../Components/About";
import Agent from "../Components/Agent";
import Propertie from "../Components/Properties";
import styled from "styled-components";
const Home = () => {
  return (
    <>
      <Navbar />
      <section id="Home">
        <Hero />
      </section>
      <Section id="About" >
        <AboutUs />
      </Section>
      <Section id="Properties">
        <Propertie/>
      </Section>
      <Section id="Agent" >
        <Agent />
      </Section>
      {/* <Section id="Sales" >
        Sales
      </Section> */}
    </>
  );
};

export default Home;

const Section = styled.section`
  padding: 60px 20px 0px 20px;
  margin:  auto;
  @media screen and (min-width: 768px) {
  margin:  auto;
    padding: 60px 20px 0px 20px;
  }
`;