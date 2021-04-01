import React from 'react';

import { describe, it, expect } from 'jest';

import { render } from '@testing-library/react';

import Download from './Download';

describe('Download', () => {
  it('"훈련 데이터셋"을 볼 수 있다.', () => {
    const { container } = render((
      <Download />
    ));

    expect(container.innerText).toHaveTextContent('훈련 데이터셋');
  });

  it('"테스트 데이터셋"을 볼 수 있다.', () => {
    const { container } = render((
      <Download />
    ));

    expect(container.innerText).toHaveTextContent('테스트 데이터셋');
  });
});
