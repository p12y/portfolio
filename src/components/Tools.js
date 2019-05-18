import React from 'react';
import styled from 'styled-components';
import { useTrail, animated } from 'react-spring';
import { Trail } from 'react-spring/renderprops';
import VisibilitySensor from "react-visibility-sensor";

const Title = styled.h1`
  color: #333;
  font-family: 'Space Mono', monospace;
`;

const Container = styled.div`
  margin-left: 5rem;
  margin-right: 5rem;
  margin-bottom: 5rem;
`;

const Section = styled.div`
  width: auto;
  height: auto;
  background: #ddd;
  border-radius: 4px;
  display: grid;
  margin: auto;
  grid-template-columns: repeat(auto-fill, minmax(18rem,1fr));
  align-items: center;
  justify-content: center;
`;

const ToolContainer = styled.div`
  background: white;
  width: 15rem;
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
      <ToolHeader>{title}</ToolHeader>
      <Hr />
      <Ul>
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

  const trail = useTrail(4, { opacity: 1, marginTop: '0rem', from: { opacity: 0, marginTop: '-10rem' } });

  const cards = [
    <ToolCard title="Languages" tools={languages} />,
    <ToolCard title="Frameworks" tools={frameworks} />,
    <ToolCard title="Databases" tools={databases} />,
    <ToolCard title="Testing" tools={testing} />,
  ];

  return (
    <Container>
      <Title>Tools of choice</Title>
      <Section>
        {trail.map((props, index) => <animated.div style={props}>{cards[index]}</animated.div>)}
      </Section>
    </Container>
  );
}

export default Tools;