import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ToolContainer = styled.div`
  background: white;
  width: 85%;
  height: auto;
  border-radius: 4px;
  margin: auto;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  align-self: start;
  box-shadow: 3px 4px 5px -2px rgba(0, 0, 0, 0.33);
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
        <li>
          <ToolHeader>{title}</ToolHeader>
        </li>
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

ToolCard.propTypes = {
  title: PropTypes.string.isRequired,
  tools: PropTypes.array.isRequired,
};

export default ToolCard;
