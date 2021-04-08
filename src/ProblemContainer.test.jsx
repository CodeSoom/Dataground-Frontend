import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { useDispatch, useSelector } from 'react-redux';

import ProblemContainer from './ProblemContainer';

jest.mock('react-redux');

describe('ProblemContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      problemTitle: '수능 성적 예측하기',
      problemDescription: '학생들의 수능 성적을 예측해보는 문제입니다.',
      uploadFile: {},
      rating: null,
    }));
  });

  it('해당 문제의 제목을 출력합니다.', () => {
    const { container } = render((<ProblemContainer />));

    expect(container).toHaveTextContent(/수능 성적 예측하기/);
  });

  it('해당 문제의 세부 설명을 출력합니다.', () => {
    const { container } = render((<ProblemContainer />));

    expect(container).toHaveTextContent(/학생들의 수능 성적을 예측해보는 문제입니다./);
  });

  it('"DOWNLOAD" 버튼이 보입니다.', () => {
    const { queryByText } = render((<ProblemContainer />));

    expect(queryByText(/DOWNLOAD/)).not.toBeNull();
  });

  it('파일을 업로드 및 제출할 수 있습니다.', () => {
    const newFile = new File(['new file'], 'dataset.csv', { type: 'text/csv' });

    const { queryByLabelText, queryByText } = render((<ProblemContainer />));

    fireEvent.change(queryByLabelText('파일 선택:'), {
      target: {
        files: [newFile],
      },
    });

    expect(dispatch).toBeCalled();

    expect(queryByText('제출')).not.toBeNull();
  });
});
