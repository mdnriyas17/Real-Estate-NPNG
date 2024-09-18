import React from "react";
import styled from "styled-components";
import Image1 from "../../public/mask.png";
const AboutUs = () => {
  return (
    <AboutUsContainer>
      <Content>
        <SectionTitle>OUR ABOUT US</SectionTitle>
        <MainTitle>WE ELEVATE THE BEAUTY OF YOUR HOME</MainTitle>
        <Description>
          Each color evokes different emotions for each individual. Your emotions
          depend on your individual life experience. Ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </Description>
        <ActionButton>Learn More</ActionButton>
      </Content>
      <ImageContainer>
        <img src={Image1} alt="About Us" />
      </ImageContainer>
    </AboutUsContainer>
  );
};

export default AboutUs;

const AboutUsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 1024px) {
      width:100%;
       max-width:870px;
   }

  @media (max-width: 768px) {
    flex-direction: column;
  
    
     max-width:730px;
   }
     @media (max-width: 425px) {
    
     max-width:400px;
   }
      @media (max-width: 375px) {
     
     max-width:370px;
   }
      @media (max-width: 320px) {
   
     max-width:300px;
   }
  
    
`;

const Content = styled.div`
  flex: 1;
  padding-right: 40px;
  text-align: left;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: rgba(10, 13, 80, 1);
  font-weight: bold;
  font-family: "JejuGothic";
  margin-bottom: 10px;
`;

const MainTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const ActionButton = styled.button`
  padding: 12px 24px;
  background-color: rgba(10, 13, 80, 1);
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #fff;
    color: rgba(10, 13, 80, 1);
    border: 1px solid rgba(10, 13, 80, 1);
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  padding-left: 40px;

  img {
    width: 100%;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding-left: 0;
    margin-top: 40px;
  }
`;