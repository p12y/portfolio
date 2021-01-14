import React from 'react';
import styled from 'styled-components';
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
  font-size: 1.2em;
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
    <Container id="work">
      <Title text="About" />
      <WorkInfo>
      I believe the web should be available to all. That’s why I write code that adheres to W3C accessibility standards. I love crafting user experiences that are a delight to use. If I’m not busy building web apps, you’ll probably find me out climbing, or playing guitar.
      </WorkInfo>
      <WorkInfo>Check out some recent projects:</WorkInfo>
      <Grid>
        {workItems.map(project => (
          <WorkCard key={project.projectTitle} project={project} />
        ))}
      </Grid>
      <ViewMoreContainer>
        <GradientButton
          icon={['fab', 'github']}
          text="view more on github"
          href="https://github.com/p12y?tab=repositories"
        ></GradientButton>
      </ViewMoreContainer>
    </Container>
  );
}

export default Work;
