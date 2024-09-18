import React from "react";
import { Carousel, Rate } from "antd";
import styled from "styled-components";
import image12 from "../../public/mask.png";
import image13 from "../../public/mask.png";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      title: "CEO, Company",
      text: "This company provided excellent service and top-notch quality. Highly recommend!",
      image: image12,
      rating: 5,
    },
    {
      id: 2,
      name: "Jane Smith",
      title: "CTO, Company",
      text: "Fantastic experience from start to finish. The team was professional and attentive.",
      image: image13,
      rating: 4,
    },
    {
      id: 3,
      name: "Alice Johnson",
      title: "CFO, Company",
      text: "Quality work and great communication throughout the project. Will use again!",
      image: image12,
      rating: 5,
    },
  ];

  return (
    <TestimonialsContainer>
      <Header>
        <h2>Our Agent</h2>
        <h1>WE ELEVATE THE BEAUTY</h1>
        <h1>OF OUR WORK</h1>
      </Header>

      <CarouselWrapper>
        <StyledCarousel autoplay>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id}>
              <ImageWrapper>
                <img src={testimonial.image} alt={testimonial.name} />
              </ImageWrapper>
              <p>"{testimonial.text}"</p>
              <h3>{testimonial.name}</h3>
              <h4>{testimonial.title}</h4>
              <Rate disabled defaultValue={testimonial.rating} />
            </TestimonialCard>
          ))}
        </StyledCarousel>
      </CarouselWrapper>
    </TestimonialsContainer>
  );
};

export default Testimonials;

const TestimonialsContainer = styled.div`
  width: 100%;
  max-width: 1320px;
  margin: 50px auto;
  text-align: center;
`;

const Header = styled.div`
  margin-bottom: 40px;

  h2 {
    font-size: 2rem;
    color: rgba(10, 13, 80, 1);
    font-weight: bold;
    margin-bottom: 10px;
  }


  h1 {
    font-size: 3rem;
    color: #555;
    margin: 0;
  }

  @media (max-width: 1024px) {
    h2 {
      font-size: 1.75rem;
    }

    h1 {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.5rem;
    }

    h1 {
      font-size: 2rem;
    }
  }

  @media (max-width: 475px) {
    h2 {
      font-size: 1.25rem;
    }

    h1 {
      font-size: 1.75rem;
    }
  }

  @media (max-width: 375px) {
    h2 {
      font-size: 1.1rem;
    }

    h1 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 320px) {
    overflow-x: hidden;
    width: 100%;
    max-width: 320px;
    h2 {
      font-size: 1rem;
    }

    h1 {
      font-size: 1.25rem;
    }
  }
`;

const CarouselWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const StyledCarousel = styled(Carousel)`
  .slick-slide {
    display: flex;
    justify-content: center;
  }
`;

const TestimonialCard = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 20px;
    padding: 0 10px;
  }

  h3 {
    font-size: 1.25rem;
    color: #333;
    margin-bottom: 5px;
  }

  h4 {
    font-size: 1rem;
    color: #999;
    margin-bottom: 15px;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 475px) {
    padding: 10px;
  }

  @media (max-width: 375px) {
    padding: 8px;
  }

  @media (max-width: 320px) {
    padding: 10px;
    overflow: hidden;
  }
`;

const ImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto 20px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }

  @media (max-width: 475px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 375px) {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 320px) {
    width: 40px;
    height: 40px;
  }
`;
