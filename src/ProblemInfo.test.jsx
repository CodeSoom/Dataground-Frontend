import React from 'react';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ProblemInfo from './ProblemInfo';

describe('ProblemInfo', () => {
  it('문제의 제목과 세부 설명이 화면에 출력됩니다.', () => {
    const title = '수능 성적 예측하기';
    const description = '학생들의 수능 성적을 예측해보는 문제입니다.';

    const { queryByText } = render((
      <ProblemInfo title={title} description={description} />
    ));

    expect(queryByText(/수능 성적 예측하기/)).not.toBeNull();
    expect(queryByText(/학생들의 수능 성적을 예측해보는 문제입니다./)).not.toBeNull();
  });
});
