import React, { useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <AboutUsContainer id="Home">
      <Content>
        <MainTitle>Revolutionizing the property ownership experience.</MainTitle>
        <Description>
          The natural of a person to own property as a concept can be seen as
          having roots in Roman law as well as Greek philosophy.
        </Description>
        <a href="#Home">
          <ActionButton>Discover Now</ActionButton>
        </a>
        <a href="#Home">
          <ActionButton1>Watch Demo</ActionButton1>
        </a>
      </Content>
      
      {/* Replace ImageContainer with EnquiryCard */}
      <EnquiryCardContainer data-aos="fade-up" data-aos-duration="1000">
        <EnquiryCard>
          <CardTitle>ENQUIRY NOW TO GET</CardTitle>
          <CardTitle>Genuine Quality 
          Leads</CardTitle>
          <Form>
            <Label htmlFor="name">Name:</Label>
            <Input id="name" type="text" placeholder="Enter your name" />
            
            <Label htmlFor="email">Email:</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
            <Label htmlFor="phone">Phone:</Label>
            <Input id="phone" type="tel" placeholder="Enter your phone number" />
            <Label htmlFor="message">Message:</Label>
            <TextArea id="message" placeholder="Enter your message" />

            <SubmitButton type="submit">Submit</SubmitButton>
          </Form>
        </EnquiryCard>
      </EnquiryCardContainer>
    </AboutUsContainer>
  );
};

export default Banner;

const AboutUsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  padding: 60px 0px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  
  @media (max-width: 1024px) {
    width: 100%;

  }

  @media (max-width: 768px) {
    flex-direction: column;

  
`;

const Content = styled.div`
  flex: 1;
  padding-right: 40px;
  text-align: left;
`;

const MainTitle = styled.h1`
  color: #0a0d50;
  font-size: 3rem;
  font-weight: bold;
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
`;

const ActionButton1 = styled.button`
  padding: 12px 24px;
  background-color: #fff;
  color: rgba(10, 13, 80, 1);
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
`;

const EnquiryCardContainer = styled.div`
  flex: 1;
  margin-top: 20px;
  padding-left: 40px;

  @media (max-width: 768px) {
    padding-left: 0;
    margin-top: 40px;
    width: 100%;
  }
`;

const EnquiryCard = styled.div`
  background-color: rgba(10, 13, 80, 1);
  padding: 20px;
  width: 100%;
  border-radius: 8px;
  box-sizing: border-box;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  color: #fff;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 8px;
  color: #fff;
`;

const Input = styled.input`
  padding: 12px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 12px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 12px 24px;
  box-sizing: border-box;
  font-weight: bold;
  background-color: #fff;
  color: rgba(10, 13, 80, 1);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
`;
