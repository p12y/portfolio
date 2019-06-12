import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  color: ${({ theme }) => theme.titleColor};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1em;
  line-height: 1.5em;
  margin-top: 0;
  margin-bottom: 2rem;
  text-align: center;
`;

const ButtonOuter = styled.a`
  align-items: center;
  background: #12c2e9;  /* fallback for old browsers */
  background: linear-gradient(to right, #f64f59, #c471ed, #12c2e9);
  border-radius: 50em;
  display: inline-flex;
  justify-content: center;
  position: relative;
  text-decoration: none;
  transition: all .2s ease-in-out;
  &:hover {
    transform: scale(1.02);
  }
  &::after {
    background: inherit;
    border-radius: 50em;
    bottom: 0;
    content: "";
    filter: blur(0px);
    height: 100%;
    left: 0;
    opacity: 0.8;
    position: absolute;
    transition: all .2s ease-in-out;
    width: 100%;
    z-index: -1;
  }
  &:hover::after {
    filter: blur(4px);
  }
`;

const ButtonInner = styled.span`
  background: ${({ theme }) => theme.background};
  border-radius: 50em;
  color: ${({ theme }) => theme.titleColor};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  margin: 2px;
  padding: 0.7rem;
  padding-left: 2rem;
  padding-right: 2rem;
  white-space: nowrap;
`;

const ViewMoreContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 3rem;
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
        <ButtonOuter href="https://github.com/p12y?tab=repositories" target="_blank" rel="noopener noreferrer">
          <ButtonInner>
            <FontAwesomeIcon style={{ marginRight: '1em' }} icon={['fab', 'github']} />VIEW MORE ON GITHUB
              </ButtonInner>
        </ButtonOuter>
      </ViewMoreContainer>
    </Container>
  );
};

export default Work;