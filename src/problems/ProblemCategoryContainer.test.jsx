import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import context from 'jest-plugin-context';

import ProblemCategoryContainer from './ProblemCategoryContainer';

jest.mock('react-redux');

describe('ProblemCategoryContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      selectedSubCategories: ['분류'],
    }));
  });

  it('"지도 학습", "비지도 학습", "강화 학습" 버튼이 보입니다.', () => {
    const { queryByText } = render((<ProblemCategoryContainer />));

    expect(queryByText('지도 학습')).not.toBeNull();
    expect(queryByText('비지도 학습')).not.toBeNull();
    expect(queryByText('강화 학습')).not.toBeNull();
  });

  context('주 학습 버튼을 눌렀을 때', () => {
    it('각각의 세부 카테고리 리스트를 세팅하는 액션이 디스패치됩니다.', () => {
      const { queryByText } = render((<ProblemCategoryContainer />));

      fireEvent.click(queryByText('지도 학습'));

      expect(dispatch).toBeCalledWith({
        type: 'setSelectedSubCategories',
        payload: {
          selectedSubCategories: ['분류', '회귀'],
        },
      });

      fireEvent.click(queryByText('비지도 학습'));

      expect(dispatch).toBeCalledWith({
        type: 'setSelectedSubCategories',
        payload: {
          selectedSubCategories: ['군집', '차원 축소', '연관 규칙 학습'],
        },
      });
    });
  });

  context('세부 카테고리 버튼을 눌렀을 때', () => {
    it('선택된 세부 카테고리를 세팅하는 액션이 디스패치됩니다.', () => {
      const { queryByText } = render((<ProblemCategoryContainer />));

      fireEvent.click(queryByText('분류'));

      expect(dispatch).toBeCalledWith({
        type: 'setSelectedSubCategory',
        payload: {
          selectedSubCategory: '분류',
        },
      });
    });
  });
});
