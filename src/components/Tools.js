import React from 'react';
import styled from 'styled-components';
import { Waypoint } from 'react-waypoint';
import { useTrail, animated, config } from 'react-spring';
import media from 'styles/media';
import Title from './styled/Title';
import Container from './styled/Container';
import reactImage from 'images/react.png';
import firebaseImage from 'images/firebase.png';
import jestImage from 'images/jest.png';

const Section = styled.div`
  width: auto;
  height: auto;
  background: #ddd;
  border-radius: 4px;
  display: grid;
  margin: auto;
  margin-bottom: 3rem;
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

const FavoritesSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: space-between;
`;

const Favorite = styled.div`
  width: 30%;
  margin: auto;
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

  const cards = [
    { title: 'Languages', tools: languages },
    { title: 'Frameworks', tools: frameworks },
    { title: 'Databases', tools: databases },
    { title: 'Testing', tools: testing },
  ];

  const favorites = [
    { alt: 'react', src: reactImage },
    { alt: 'firebase', src: firebaseImage },
    { alt: 'jest', src: jestImage },
  ];

  const [toolsTrail, setToolsTrail] = useTrail(cards.length,
    () => {
      return { config: config.gentle, opacity: 0, transform: 'scale(0)' }
    });

  const [favoritesTrail, setFavoritesTrail] = useTrail(favorites.length,
    () => {
      return { config: config.gentle, opacity: 0, transform: 'scale(0)' }
    });

  const animateFavoritesIn = () => setFavoritesTrail({ opacity: 1, transform: 'scale(1)' });
  const animateToolsIn = () => setToolsTrail({ opacity: 1, transform: 'scale(1)' });

  return (
    <Container>
      <Title>Toolbox</Title>
      <Waypoint onEnter={animateToolsIn} >
        <Section>
          {toolsTrail.map((props, index) => {
            const card = cards[index];
            return (
              <animated.div key={card.title} style={{ ...props, alignSelf: 'start' }}>
                <ToolCard title={card.title} tools={card.tools} />
              </animated.div>
            );
          })}
        </Section>
      </Waypoint>
      <Title>Current favourites</Title>
      <Waypoint onEnter={animateFavoritesIn}>
        <FavoritesSection>
          {favoritesTrail.map((props, index) => {
            const favorite = favorites[index];
            return (
              <Favorite key={favorite.alt}>
                <animated.img style={{ ...props, width: '100%' }} alt={favorite.alt} src={favorite.src} />
              </Favorite>
            );
          })}
        </FavoritesSection>
      </Waypoint>
    </Container>
  );
}

export default Tools;