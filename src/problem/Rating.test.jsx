import React from 'react';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import context from 'jest-plugin-context';

import Rating from './Rating';

describe('Rating', () => {
  context('테스트 파일이 제출되지 않았을 때', () => {
    it('"파일을 제출해 주세요."가 보입니다.', () => {
      const rating = null;

      const { queryByText } = render((<Rating rating={rating} />));

      expect(queryByText(/파일을 제출해 주세요./)).not.toBeNull();
    });
  });

  context('테스트 파일이 제출되었을 때', () => {
    const myRating = {
      score: 98,
      incorrectPredictions: [
        { id: 32 }, { id: 75 },
      ],
    };

    it('해당 문제의 사용자 점수가 화면에 출력됩니다.', () => {
      const { queryByText } = render((<Rating rating={myRating} />));

      expect(queryByText(/98/)).not.toBeNull();
    });

    it('해당 문제에 대한 사용자의 오답 문항을 출력합니다.', () => {
      const { queryByText } = render((<Rating rating={myRating} />));

      expect(queryByText(/32/)).not.toBeNull();
      expect(queryByText(/75/)).not.toBeNull();
    });
  });
});
