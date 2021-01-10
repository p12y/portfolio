import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ButtonOuter = styled.a`
  align-items: center;
  background: #12c2e9; /* fallback for old browsers */
  background: linear-gradient(to right, #f64f59, #c471ed, #12c2e9);
  border-radius: 50em;
  display: inline-flex;
  justify-content: center;
  position: relative;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  will-change: transform;
  &:hover, &:focus {
    transform: scale(1.02);
  }
  &::after {
    background: inherit;
    border-radius: 50em;
    bottom: 0;
    content: '';
    filter: blur(0px);
    height: 100%;
    left: 0;
    opacity: 0.8;
    position: absolute;
    transition: all 0.2s ease-in-out;
    width: 100%;
    z-index: -1;
    will-change: filter, box-shadow;
  }
  &:hover::after, &:focus::after {
    box-shadow: 3px 4px 5px -2px rgba(0, 0, 0, 0.33);
    filter: blur(4px);
  }
  outline: 10px solid transparent;
`;

const ButtonInner = styled.span`
  background: ${({ inverted, theme }) =>
    inverted ? theme.titleColor : theme.background};
  border-radius: 50em;
  color: ${({ inverted, theme }) =>
    inverted ? theme.background : theme.titleColor};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  margin: 2px;
  padding: 0.7rem;
  padding-left: 2rem;
  padding-right: 2rem;
  white-space: nowrap;
`;

function GradientButton({ href, text, inverted, icon, target }) {
  return (
    <ButtonOuter href={href} target={target || '_blank'} rel="noopener">
      <ButtonInner inverted={inverted}>
        {icon && <FontAwesomeIcon style={{ marginRight: '1em' }} icon={icon} />}
        {text.toUpperCase()}
      </ButtonInner>
    </ButtonOuter>
  );
}

GradientButton.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  inverted: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  target: PropTypes.string,
};

export default GradientButton;
