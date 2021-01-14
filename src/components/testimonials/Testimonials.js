import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Title from 'components/Title';
import Container from 'components/styled/Container';
import testimonials from 'data/testimonials';

const TestimonialsContainer = styled.div`
  color: ${({ theme }) => theme.titleColor};
  font-family: ${({ theme }) => theme.fonts.body};
  margin-left: 10%;
  margin-right: 10%;
  position: relative;
  text-align: center;
`;

const Avatar = styled.span`
  background: #ddd;
  border-radius: 50%;
  display: inline-block;
  height: 6rem;
  margin-top: 1em;
  width: 6rem;
`;

const TestimonialText = styled.p`
  font-size: 1.2em;
  margin-bottom: 2em;
  margin-top: 2em;
`;

const Name = styled.h3`
  font-family: ${({ theme }) => theme.fonts.title};
  margin-bottom: 0.1em;
`;

const Position = styled.h4`
  margin-top: 0;
`;

const QuoteIconContainer = styled.div`
  font-size: 3rem;
  opacity: 0.3;
`;

function Testimonials() {
  return (
    <Container>
      <Title text="What people say" />
      <TestimonialsContainer>
      <QuoteIconContainer>
          <FontAwesomeIcon icon="quote-left" />
        </QuoteIconContainer>
        {testimonials.map(testimonial => (
          <div style={{ paddingBottom: '3rem' }} key={testimonial.name}>
            {testimonial.avatar && <Avatar />}
            <TestimonialText>"{testimonial.text}"</TestimonialText>
            <Name>{testimonial.name}</Name>
            <Position>{`${testimonial.position}, ${testimonial.company}`}</Position>
          </div>
        ))}
      </TestimonialsContainer>
    </Container>
  );
}

export default Testimonials;
