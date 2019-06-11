import React, { useState } from 'react';
import styled from 'styled-components';
import WorkModal from './WorkModal';

const Card = styled.div`
  align-items: center;
  background: #2BC0E4; /* fallback for old browsers */
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

const WorkCard = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModalOpen = () => {
    document.querySelector('body').style.overflow = !modalOpen ? 'hidden' : 'initial';
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <WorkModal
        toggleModalOpen={toggleModalOpen}
        modalOpen={modalOpen}
        project={props.project}
      />
      <Card
        onClick={toggleModalOpen}
        background={props.project.background}
      >
        <Title>{props.project.projectTitle}</Title>
      </Card>
    </>
  );
}

export default WorkCard;