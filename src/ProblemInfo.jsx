import React from 'react';

import styled from '@emotion/styled';

const ProblemInfoContainer = styled.div({
  margin: '6vh 0 5vh 0',
  padding: '2vh 2vw',
});

const Title = styled.div({
  margin: '5vh 0 3vh 0',
  fontSize: '4vh',
  fontWeight: 'bolder',
});

const Description = styled.div({
  fontSize: '1.8vh',
  color: '#777777',
});

export default function ProblemInfo({ title, description }) {
  return (
    <ProblemInfoContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </ProblemInfoContainer>
  );
}
