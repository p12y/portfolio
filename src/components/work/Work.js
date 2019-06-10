import React from 'react';
import styled from 'styled-components';
import Title from '../Title';
import Container from '../styled/Container';
import media from 'styles/media';
import WorkCard from './WorkCard';
import workItems from 'data/workItems';

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

function Work() {
  return (
    <Container>
      <Title text="Work" />
      <Grid>
        {workItems.map(props => (
          <WorkCard {...props} />
        ))}
      </Grid>
    </Container>
  );
};

export default Work;