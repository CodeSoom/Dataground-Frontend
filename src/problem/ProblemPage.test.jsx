import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ProblemPage from './ProblemPage';

jest.mock('react-redux');

describe('ProblemPage', () => {
  beforeEach(() => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      problemTitle: '수능 성적 예측하기',
      problemDescription: '학생들의 수능 성적을 예측해보는 문제입니다.',
      uploadFile: {},
      rating: null,
    }));
  });

  it('문제 페이지를 랜더링합니다.', () => {
    const params = { problemId: 1 };

    const { container } = render((
      <ProblemPage params={params} />
    ));

    expect(container).toHaveTextContent('수능 성적 예측하기');
  });
});
