import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Container from './styled/Container';
import media from 'styles/media';

const Grid = styled.div`
  display: grid;
  flex-wrap: wrap;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
  ${media.tablet`
    grid-template-columns: repeat(auto-fit, minmax(60%, 1fr));
  `}
  ${media.phone`
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
`}
`;

const WorkCard = styled.div`
  position: relative;
  width: 100%;
  height: 15rem;
  margin: auto;
  background: white;
  border-radius: 4px;
  background: #2BC0E4;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #EAECC6, #2BC0E4);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #EAECC6, #2BC0E4); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;


function Work() {
  return (
    <Container>
      <Title text="Work" />
      <Grid>
        <WorkCard></WorkCard>
        <WorkCard></WorkCard>
        <WorkCard></WorkCard>
        <WorkCard></WorkCard>
        <WorkCard></WorkCard>
        <WorkCard></WorkCard>
      </Grid>
    </Container>
  );
};

export default Work;