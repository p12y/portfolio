import React from 'react';
import styled from 'styled-components';
import Title from 'components/Title';
import Container from 'components/styled/Container';

const TestimonialsContainer = styled.div`
  text-align: center;
  height: 20rem;
  margin-left: 10%;
  margin-right: 10%;
  color: ${({ theme }) => theme.titleColor};
  font-family: ${({ theme }) => theme.fonts.body};
`;

const Avatar = styled.span`
  display: inline-block;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  margin-top: 1em;
  background: #ddd;
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
`

function Testimonials() {
  return (
    <Container>
      <Title text="Testimonials" />
      <TestimonialsContainer>
        <Avatar />
        <TestimonialText>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Imperdiet massa tincidunt nunc pulvinar sapien et ligula."
        </TestimonialText>
        <Name>Test name</Name>
        <Position>Test position, Company</Position>
      </TestimonialsContainer>
    </Container>
  );
}

export default Testimonials;