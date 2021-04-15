import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import context from 'jest-plugin-context';
import given from 'given2';

import ProblemListContainer from './ProblemListContainer';

jest.mock('react-redux');

describe('ProblemListContainer', () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      problems: given.problems,
    }));
  });

  context('문제들이 없을 시', () => {
    it('"화면에 문제들이 보이지 않습니다."', () => {
      given('problems', () => []);

      const { container } = render((<ProblemListContainer onClick={handleClick} />));

      expect(container).not.toHaveTextContent();
    });
  });

  context('문제들이 있을 시', () => {
    it('문제들이 보입니다.', () => {
      given('problems', () => [{ id: 1, title: '수능 성적 예측하기' }]);

      const { queryByText } = render((<ProblemListContainer onClick={handleClick} />));

      expect(queryByText(/수능 성적 예측하기/)).not.toBeNull();
    });
  });
});
