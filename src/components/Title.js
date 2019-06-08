import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import { Waypoint } from 'react-waypoint';

const H1 = styled.h1`
  color: ${props => props.theme.titleColor};
  font-family: 'Space Mono', monospace;
  display: inline-block;
  margin: 0;
  white-space: nowrap;
`;

const Container = styled.div`
  width: auto;
  display: inline-block;
  margin-bottom: 1rem;
`;

const underlineStyle = {
  display: 'inline-block',
  boxShadow: 'inset 0 -6px 0 rgba(246,43,84, 1)',
  margin: '1em 0 1em 0',
};

function Title({ text }) {
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

export default Title;