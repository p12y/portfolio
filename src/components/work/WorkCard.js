import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  cursor: pointer;
  position: relative;
  width: 100%;
  height: 15rem;
  margin: auto;
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: #2BC0E4; /* fallback for old browsers */
  background: ${props => props.background};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title};
  color: white;
`;

const WorkCard = (props) => {
  return (
    <Card {...props}>
      <Title>{props.title}</Title>
    </Card>
  );
}

export default WorkCard;