import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import WorkModal from './WorkModal';

const Card = styled.div`
  align-items: center;
  background: #2bc0e4; /* fallback for old browsers */
  background: ${props => props.background};
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  display: flex;
  height: 15rem;
  justify-content: center;
  margin: auto;
  position: relative;
  width: 100%;
`;

const Title = styled.h2`
  color: white;
  font-family: ${({ theme }) => theme.fonts.title};
`;

const WorkCard = ({ project }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModalOpen = () => {
    document.querySelector('body').style.overflow = !modalOpen
      ? 'hidden'
      : 'initial';
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <WorkModal
        toggleModalOpen={toggleModalOpen}
        onClose={toggleModalOpen}
        open={modalOpen}
        project={project}
      />
      <Card onClick={toggleModalOpen} background={project.background}>
        <Title>{project.projectTitle}</Title>
      </Card>
    </>
  );
};

WorkCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default WorkCard;
