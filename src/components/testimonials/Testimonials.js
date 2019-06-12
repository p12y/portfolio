import React from 'react';
import styled from 'styled-components';
import Title from 'components/Title';
import Container from 'components/styled/Container';
import testimonials from 'data/testimonials';

const TestimonialsContainer = styled.div`
  color: ${({ theme }) => theme.titleColor};
  font-family: ${({ theme }) => theme.fonts.body};
  margin-left: 10%;
  margin-right: 10%;
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

function Testimonials() {
  return (
    <Container>
      <Title text="Testimonials" />
      <TestimonialsContainer>
        {testimonials.map(testimonial => (
          <div style={{ paddingBottom: '3rem' }} key={testimonial.name}>
            <Avatar />
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