import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Title from 'components/Title';
import Container from 'components/styled/Container';
import media from 'styles/media';
import WorkCard from './WorkCard';
import workItems from 'data/workItems';
import GradientButton from 'components/GradientButton';

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
  color: ${({ theme }) => theme.titleColor};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1em;
  line-height: 1.5em;
  margin-top: 0;
  margin-bottom: 2rem;
  text-align: center;
`;

const ViewMoreContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 3rem;
  padding-bottom: 0;
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
      <WorkInfo>Check out some recent projects:</WorkInfo>
      <Grid>
        {workItems.map(project => (
          <WorkCard
            key={project.projectTitle}
            project={project}
          />
        ))}
      </Grid>
      <ViewMoreContainer>
        <GradientButton href="https://github.com/p12y?tab=repositories">
          <FontAwesomeIcon
            style={{ marginRight: '1em' }}
            icon={['fab', 'github']}
          />VIEW MORE ON GITHUB
        </GradientButton>
      </ViewMoreContainer>
    </Container>
  );
};

export default Work;