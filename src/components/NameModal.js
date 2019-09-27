import React from 'react';
import styled, { keyframes } from 'styled-components';
import Dialog from './Dialog';

const NumberedName = styled.p`
  color: ${props => props.theme.titleColor};
  font-family: 'Open Sans', sans-serif;
  text-align: center;
`;

const Paragraph = styled.p`
  color: ${props => props.theme.titleColor};
  font-family: 'Open Sans', sans-serif;
`;

const NameText = styled.span`
  color: ${props => props.theme.titleColor};
  font-size: 1.3em;
`;

const SubNumber = styled.sub`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.5em;
`;

const flashBackground = keyframes`
  0% {
    opacity: 0;
  }
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const DialogTitleWrapper = styled.div`
  background: ${({ theme }) => theme.colors.primary};
`;

const NameDialogTitle = styled.h2`
  animation: ${flashBackground} 2s step-start infinite;
  color: white;
  font-family: 'Space Mono', monospace;
`;

function letterCountText(text) {
  const letters = text.split('');
  const result = [];
  let count = 0;
  for (let i = 0; i < letters.length; i += 1) {
    const letter = letters[i];
    result.push(
      <span key={i}>
        {i === letters.length - 1 ? '+' : ''}
        {letter}
        <SubNumber>
          {letter.trim() && i !== 0 && i !== letters.length - 1 ? count : ''}
        </SubNumber>
        {i === 0 ? '+' : ''}
      </span>
    );
    if (letter.trim()) count += 1;
  }

  return result;
}

const NameModal = ({ open, onClose }) => (
  <Dialog
    open={open}
    onClose={onClose}
    title={
      <DialogTitleWrapper>
        <NameDialogTitle>WARNING, NERD ALERT!</NameDialogTitle>
      </DialogTitleWrapper>
    }
    content={
      <>
        <Paragraph>
          "P12y" is an abbreviation of "Peter Tyldesley". It's derived from its
          spelling as the letter "P", plus 12 letters, plus the letter "y".
        </Paragraph>
        <NumberedName>
          <NameText>{letterCountText('Peter Tyldesley')}</NameText>
        </NumberedName>
      </>
    }
  />
);

export default NameModal;
