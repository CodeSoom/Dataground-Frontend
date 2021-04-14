import React from 'react';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import context from 'jest-plugin-context';

import ProblemList from './ProblemList';

describe('ProblemList', () => {
  context('문제들이 없을 시', () => {
    it('"문제가 없습니다."가 보입니다.', () => {
      const emptyProblems = [];

      const { queryByText } = render((<ProblemList problems={emptyProblems} />));

      expect(queryByText(/문제가 없습니다./)).not.toBeNull();
    });
  });

  context('문제들이 있을 시', () => {
    it('문제들이 보입니다.', () => {
      const problems = [{ id: 1, name: '수능 성적 예측하기' }];

      const { queryByText } = render((<ProblemList problems={problems} />));

      expect(queryByText(/수능 성적 예측하기/)).not.toBeNull();
    });
  });
});
