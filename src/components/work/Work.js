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

const WorkInfo = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.titleColor};
  text-align: center;
  margin-top: 0;
  font-size: 1em;
  margin-bottom: 2rem;
  line-height: 1.5em;
`;

function Work() {
  return (
    <Container>
      <Title text="Work" />
      <WorkInfo>
        My journey as a web developer started over 4 years ago. Since then, I've had the opportunity to work on many interesting projects.
        I've created full-stack applications from the ground up, built APIs and CLIs using Node and worked with a number of front-end JS frameworks, including React, Vue and Angular.
        I'm always trying to improve workflows for myself and the team and have built Chrome extensions and browser automation tools to speed up and automate repetative tasks for myself and the team.
      </WorkInfo>
      <WorkInfo>Check out my recent projects:</WorkInfo>
      <Grid>
        {workItems.map(props => (
          <WorkCard key={props.title} {...props} />
        ))}
      </Grid>
    </Container>
  );
};

export default Work;