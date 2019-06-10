import React from 'react';
import styled from 'styled-components';

const borderRadius = '4px';

const Card = styled.div`
  z-index: 1;
  position: relative;
  width: 100%;
  height: 15rem;
  margin: auto;
  background: white;
  border-radius: ${borderRadius};
  background: #2BC0E4;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #EAECC6, #2BC0E4);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #EAECC6, #2BC0E4); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.titleColor};
`;

const WorkCard = (props) => {
  return (
    <Card>
      <Title>{props.title}</Title>
    </Card>
  );
}

export default WorkCard;