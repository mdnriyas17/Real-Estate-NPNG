import React from "react";
import image4 from "../../public/mask.png";
import styled from "styled-components";
// import { Link } from "react-router-dom";

const Ourservicepage = () => {
  const ourservices = [
    {
      id: 1,
      title: "Villa",
      describtion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      image: image4,
      button: {
        text: "Read More",
        link: "/sweeping",
      },
    },
    {
      id: 2,
      title: "Apartments",
      describtion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      image: image4,
      button: {
        text: "Read More",
        link: "/cleaning",
      },
    },
    {
      id: 3,
      title: "House",
      describtion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      image: image4,
      button: {
        text: "Read More",
        link: "/roofing",
      },
    },
  ];

  return (
    <ServiceContainer>
      <SectionTitle>
        <h2>Our Properties</h2>
        <h1>WE PROVIDE VILLA APARTMENTS HOUSE</h1>
      </SectionTitle>
      <ServiceList>
        {ourservices.map((ourservice) => (
          <ServiceItem key={ourservice.id}>
            <ServiceImage src={ourservice.image} alt={ourservice.title} />
            <ServiceContent>
              <h3>{ourservice.title}</h3>
              <p>{ourservice.describtion}</p>
              {/* <StyledLink to={ourservice.button.link}>
                <ServiceButton>{ourservice.button.text}</ServiceButton>
              </StyledLink> */}
            </ServiceContent>
          </ServiceItem>
        ))}
      </ServiceList>
    </ServiceContainer>
  );
};

export default Ourservicepage;

const ServiceContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
 @media (max-width: 1024px) {
     width:100%;
      max-width:870px;
   }
      @media (max-width: 768px) {
    
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

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 40px;

  h2 {
    font-size: 2rem;
    color: rgba(10, 13, 80, 1);
    font-weight: bold;
    margin-bottom: 10px;
  }

  h1 {
    font-size: 3rem;
    margin: 0;
  }
`;

const ServiceList = styled.div`
  display: grid;
  
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const ServiceItem = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  
  text-align: center;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;

const ServiceImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  
  
`;

const ServiceContent = styled.div`
  margin-top: 20px;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 20px;
  }
`;

// const StyledLink = styled(Link)`
//   text-decoration: none;
// `;

const ServiceButton = styled.button`
  padding: 10px 20px;
  background-color: #f98866;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e76f51;
  }
`;