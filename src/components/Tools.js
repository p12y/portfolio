import React from 'react';
import styled from 'styled-components';
import { Waypoint } from 'react-waypoint';
import { useTrail, animated } from 'react-spring';
import media from '../styles/media';

const Title = styled.h1`
  color: ${props => props.theme.titleColor};
  font-family: 'Space Mono', monospace;
  -webkit-box-shadow: inset 0 -6px 0 rgba(246,43,84, 1);
  box-shadow: inset 0 -6px 0 rgba(246,43,84, 1);
  display: inline-block;
`;

const Container = styled.div`
  margin: 0 5rem 0 5rem;
  ${media.phone`
  margin: 0 1rem 0 1rem;
  `}
`;

const Section = styled.div`
  width: auto;
  height: auto;
  background: #ddd;
  border-radius: 4px;
  display: grid;
  margin: auto;
  grid-template-columns: repeat(auto-fill, minmax(25%,1fr));
  ${media.tablet`
    grid-template-columns: repeat(auto-fill, minmax(50%,1fr));
  `}
  ${media.phone`
    grid-template-columns: repeat(auto-fill, minmax(100%,1fr));
  `}
  align-items: center;
  justify-content: center;
`;

const ToolContainer = styled.div`
  background: white;
  width: 85%;
  height: auto;
  border-radius: 4px;
  margin: auto;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  align-self: start;
  -webkit-box-shadow: 3px 4px 5px -2px rgba(0,0,0,0.33);
  -moz-box-shadow: 3px 4px 5px -2px rgba(0,0,0,0.33);
  box-shadow: 3px 4px 5px -2px rgba(0,0,0,0.33);
  text-align: center;
  padding-bottom: 0.5rem;
  padding-top: 1px;
`;

const ToolHeader = styled.h3`
  color: #333;
  font-family: 'Space Mono', monospace;
`;

const Hr = styled.hr`
  border-top: 1px dashed #8c8b8b;
`;

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Li = styled.li`
  padding: 0.5rem;
  font-family: 'Open Sans', sans-serif;
`;

function ToolCard({ title, tools }) {
  return (
    <ToolContainer>
      <Ul>
        <li><ToolHeader>{title}</ToolHeader></li>
        <Hr />
        {tools.map((tool, index) => {
          return (
            <div key={tool}>
              <Li>{tool}</Li>
              {index === tools.length - 1 ? '' : <Hr />}
            </div>
          );
        })}
      </Ul>
    </ToolContainer>
  );
}

function Tools() {
  const languages = [
    'JavaScript',
    'HTML/CSS',
    'Ruby',
    'Dart',
  ];

  const frameworks = [
    'React',
    'Vue',
    'Express',
    'Rails',
    'Flutter',
  ];

  const databases = [
    'MongoDB',
    'PostgreSQL',
    'Firebase',
  ];

  const testing = [
    'Jest',
    'Enzyme',
    'Mocha',
    'Chai',
  ];

  const [trail, set] = useTrail(4, () => { return { opacity: 0, transform: 'scale(0)' } });

  const cards = [
    <ToolCard title="Languages" tools={languages} />,
    <ToolCard title="Frameworks" tools={frameworks} />,
    <ToolCard title="Databases" tools={databases} />,
    <ToolCard title="Testing" tools={testing} />,
  ];

  return (
    <Container>
      <Title>Toolbox</Title>
      <Waypoint
        onEnter={() => set({ opacity: 1, transform: 'scale(1)' })}
        onLeave={() => set({ opacity: 0, transform: 'scale(0)' })}
      >
        <Section>
          {trail.map((props, index) =>
            <div style={{ alignSelf: 'start' }}>
              <animated.div style={props}>{cards[index]}</animated.div>
            </div>)}
        </Section>
      </Waypoint>
    </Container>
  );
}

export default Tools;