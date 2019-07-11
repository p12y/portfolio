import React, { useState } from 'react';
import styled, { withTheme } from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import { Waypoint } from 'react-waypoint';
import media from 'styles/media';

const H1 = styled.h1`
  color: ${props => props.theme.titleColor};
  font-family: 'Space Mono', monospace;
  display: inline-block;
  margin: 0;
  white-space: nowrap;
  ${media.phone`
    font-size: 1.6em;
  `}
`;

const Container = styled.div`
  width: auto;
  display: inline-block;
  margin-bottom: 1rem;
`;

function Title({ text, theme }) {
  const underlineStyle = {
    display: 'inline-block',
    borderBottom: `6px solid ${theme.colors.primary}`,
    margin: '1em 0 1em 0',
  };

  const [toggle, setToggle] = useState(false);
  const props = useSpring({
    to: async (next) => {
      await next({ opacity: toggle ? 1 : 0, config: config.gentle });
      await next({ width: toggle ? '100%' : '0%', config: config.default });
    },
    from: { opacity: 0, width: '0%' }
  });

  return (
    <Waypoint topOffset="50px" bottomOffset="50px" onEnter={() => setToggle(true)}>
      <Container>
        <animated.div style={{ ...props, ...underlineStyle }}>
          <H1>{text}</H1>
        </animated.div>
      </Container>
    </Waypoint>
  );
}

export default withTheme(Title);