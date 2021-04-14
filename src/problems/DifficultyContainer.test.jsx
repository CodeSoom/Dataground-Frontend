import React from 'react';

import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import context from 'jest-plugin-context';

import { useDispatch } from 'react-redux';

import DifficultyContainer from './DifficultyContainer';

jest.mock('react-redux');

describe('DifficultyContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  it('"연습중!" 버튼과 "도전!!" 버튼이 보입니다.', () => {
    const { queryByText } = render((<DifficultyContainer />));

    expect(queryByText('연습중!')).not.toBeNull();
    expect(queryByText('도전!!')).not.toBeNull();
  });

  context('"연습중!" 버튼이나 "도전!!" 버튼을 클릭할 때', () => {
    it('dispatch가 수행됩니다.', () => {
      const { queryByText } = render((<DifficultyContainer />));

      fireEvent.click(queryByText('연습중!'));

      expect(dispatch).toBeCalledTimes(1);
    });
  });
});
