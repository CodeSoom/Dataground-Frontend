import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ProblemsPage from './ProblemsPage';

const mockPush = jest.fn();

jest.mock('react-redux');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory() {
    return { push: mockPush };
  },
}));

function renderProblemsPage() {
  return render((
    <MemoryRouter>
      <ProblemsPage />
    </MemoryRouter>
  ));
}

describe('ProblemsPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      problemDifficulty: '',
      selectedSubCategories: ['분류', '회귀'],
      selectedSubCategory: '',
      problems: [{ id: 1, title: '수능 성적 예측하기' }],
    }));
  });

  it('난이도 버튼과 문제 유형 버튼이 보입니다.', () => {
    const { queryByText } = renderProblemsPage();

    expect(queryByText('연습중!')).not.toBeNull();
    expect(queryByText('회귀')).not.toBeNull();

    fireEvent.click(queryByText('연습중!'));
    fireEvent.click(queryByText('회귀'));

    expect(dispatch).toBeCalled();
  });

  it('문제를 클릭하면, 문제 페이지로 이동합니다.', () => {
    const { queryByText } = renderProblemsPage();

    fireEvent.click(queryByText('수능 성적 예측하기'));

    expect(mockPush).toBeCalledWith('/problems/1');
  });
});
