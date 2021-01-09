import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import WorkModal from './WorkModal';
import useDisclosure from 'hooks/useDisclosure';

const Card = styled.button`
  align-items: center;
  background: #2bc0e4; /* fallback for old browsers */
  background: ${props => props.background};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;
  cursor: pointer;
  display: flex;
  height: 15rem;
  justify-content: center;
  margin: auto;
  outline: none;
  position: relative;
  transition: box-shadow 0.25s;
  width: 100%;
  &:focus {
    box-shadow: 0 0 0 3px var(--secondary);
  }
`;

const Title = styled.h2`
  color: white;
  font-family: ${({ theme }) => theme.fonts.title};
`;

const WorkCard = ({ project }) => {
  const { open, close, toggle, isOpen } = useDisclosure();

  return (
    <>
      <WorkModal toggleModalOpen={toggle} onClose={close} open={isOpen} project={project} />
      <Card onClick={open} background={project.background} aria-label={`View project: ${project.projectTitle}`}>
        <Title>{project.projectTitle}</Title>
      </Card>
    </>
  );
};

WorkCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default WorkCard;
