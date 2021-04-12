import React from 'react';

import styled from '@emotion/styled';

const RatingContainer = styled.div({
  margin: '5vh 0',
  fontSize: '.6em',
  display: 'flex',
});

const NotSubmitText = styled.div({
  fontSize: '.8em',
});

const Score = styled.div({
  fontSize: '2.8vh',
  width: '50%',
  alignContent: 'center',
  color: '#881010',
});

const InCorrectContainer = styled.div({
  fontSize: '2.7vh',
  width: '40%',
  margin: '0 0 1vh 0',
  alignContent: 'center',
});

const IncorrectPrediction = styled.li({
  fontSize: '2vh',
  marginTop: '.5vh',
});

export default function Rating({ rating }) {
  return (
    <div>
      {rating
        ? (
          <RatingContainer>
            <Score>
              {`점수: ${rating.score}`}
            </Score>

            <InCorrectContainer>
              틀린 문제

              <ul>
                {rating.incorrectPredictions
                  .map((incorrectPrediction) => (
                    <IncorrectPrediction key={incorrectPrediction.id}>
                      {`${incorrectPrediction.id}번`}
                    </IncorrectPrediction>
                  ))}
              </ul>
            </InCorrectContainer>
          </RatingContainer>

        )
        : (
          <NotSubmitText>
            파일을 제출해 주세요.
          </NotSubmitText>
        )}
    </div>
  );
}
